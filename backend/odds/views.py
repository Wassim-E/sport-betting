from rest_framework.views import APIView
from rest_framework.response import Response
import requests

class ParionsSportBets(APIView):
    def get(self, request):
        try:
            response = requests.get('http://www.enligne.parionssport.fdj.fr/services-api/sportsbookdata/current/events/live/topmarket', headers={
                "X-Lvs-Hstoken": f"p6nbnWmWBWdwCiKPgTwLFwEkwMxjLDHgrufm-SJXQqOSJDmJPl04qEQPRsA77p1e7Mm546m3_9sZgr6BLilmtzQagxEImbfc_KYHV6CyXCSqCnoo0JR12pWgFxLbGd9XYWscJ7HRBAhhfJzRh-Rkng=="
            })
            response.raise_for_status()  # Raise an error for HTTP errors
            data = response.json()
            print("ParionsSport API call successful")
            return Response({"status": "success", "data": data})
        except Exception as e:
            print(f"ParionsSport API call failed: {e}")
            return Response({"status": "error", "message": str(e)}, status=500)