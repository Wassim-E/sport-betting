import json
from datetime import datetime

def parse_betting_data_parionssport(json_data):
    """
    Parses the flat JSON structure from the betting API into a nested list of events.
    Each event contains its details, associated markets, and outcomes with odds.
    
    Args:
        json_data (dict): The raw JSON data from the API (under 'data'['items']).
    
    Returns:
        list: A list of dictionaries, each representing an event with nested markets and outcomes.
    """
    items = json_data['items']
    
    # Dictionaries to hold events, markets, and outcomes
    events = {}
    markets = {}
    outcomes = {}
    
    # First pass: Separate events, markets, and outcomes
    for key, value in items.items():
        if key.startswith('l'):  # Events
            events[key] = value
        elif key.startswith('m'):  # Markets
            markets[key] = value
        elif key.startswith('o'):  # Outcomes
            outcomes[key] = value
    
    # Second pass: Link markets to events and outcomes to markets
    structured_events = []
    for event_id, event_data in events.items():
        # Convert start to integer if it exists and is a valid string
        start_time = event_data.get('start', 0)
        try:
            start_timestamp = int(start_time) if start_time else 0
            start_datetime = datetime.fromtimestamp(start_timestamp).strftime('%Y-%m-%d %H:%M:%S') if start_timestamp else 'N/A'
        except (ValueError, TypeError):
            start_timestamp = 0
            start_datetime = 'N/A'
        
        event = {
            'event_id': event_id,
            'description': event_data.get('desc', 'N/A'),
            'start_timestamp': start_timestamp,
            'start_datetime': start_datetime,
            'team_a': event_data.get('a', 'N/A'),
            'team_b': event_data.get('b', 'N/A'),
            'score': event_data.get('score', {}),
            'time': event_data.get('time', {}),
            'period': event_data.get('period', {}),
            'path': event_data.get('path', {}),  # League, Sport, Category
            'code': event_data.get('code', 'N/A'),  # e.g., FOOT, TENN
            'markets': []
        }
        
        # Find markets for this event
        for market_id, market_data in markets.items():
            if market_data.get('parent') == event_id:
                market = {
                    'market_id': market_id,
                    'description': market_data.get('desc', 'N/A'),
                    'period': market_data.get('period', 'N/A'),
                    'style': market_data.get('style', 'N/A'),
                    'outcomes': []
                }
                
                # Find outcomes for this market
                for outcome_id, outcome_data in outcomes.items():
                    if outcome_data.get('parent') == market_id:
                        outcome = {
                            'outcome_id': outcome_id,
                            'description': outcome_data.get('desc', 'N/A'),
                            'price': outcome_data.get('price', 'N/A'),  # Odds
                            'spread': outcome_data.get('spread', 0),
                            'spread2': outcome_data.get('spread2', 0),
                            'flags': outcome_data.get('flags', []),
                            'pos': outcome_data.get('pos', 0)
                        }
                        market['outcomes'].append(outcome)
                
                # Sort outcomes by pos if needed
                market['outcomes'].sort(key=lambda x: x['pos'])
                event['markets'].append(market)
        
        # Sort markets by pos if available
        event['markets'].sort(key=lambda x: x.get('pos', 0))
        structured_events.append(event)
    
    # Sort events by start time
    structured_events.sort(key=lambda x: x['start_timestamp'])
    
    return structured_events