from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from odds.utils.parionssport import parse_betting_data_parionssport
from backend.error_handler import print_and_response_verbose_error

class ParionsSportBets(APIView):
    def get(self, request):
        # get parionssport bets and turn them into a usable format
        try:
            response = requests.get('http://www.enligne.parionssport.fdj.fr/services-api/sportsbookdata/current/events/live/topmarket', headers={
                "X-Lvs-Hstoken": f"p6nbnWmWBWdwCiKPgTwLFwEkwMxjLDHgrufm-SJXQqOSJDmJPl04qEQPRsA77p1e7Mm546m3_9sZgr6BLilmtzQagxEImbfc_KYHV6CyXCSqCnoo0JR12pWgFxLbGd9XYWscJ7HRBAhhfJzRh-Rkng=="
            })
            response.raise_for_status()  # Raise an error for HTTP errors
            data = response.json()
        except Exception as e:
            return print_and_response_verbose_error(e, "Failed to retrieve ParionsSport data", "ParionsSportBets.get")

        try:
            structured_data = parse_betting_data_parionssport(data)
        except Exception as e:
            return print_and_response_verbose_error(e, "Failed to parse ParionsSport data", "ParionsSportBets.get")
        
        print("ParionsSport API call successful")
        return Response({"status": "success", "data": structured_data})