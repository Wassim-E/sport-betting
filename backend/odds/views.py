from rest_framework.views import APIView
from rest_framework.response import Response

class ExternalAPIView(APIView):
    def get(self, request):
        try:
            # Replace with your external API URL
            print("External API call successful")
            return Response({"status": "success"})
        except Exception as e:
            print(f"External API call failed: {e}")
            return Response({"status": "error", "message": str(e)}, status=500)