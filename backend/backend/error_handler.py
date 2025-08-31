import traceback as tb
from rest_framework.response import Response
from backend.settings import DEBUG

def print_and_response_verbose_error(e, message="Unknown error", function_name="[Unknown]", status_code=500):
    # Format the traceback as a string
    traceback_str = ''.join(tb.format_tb(e.__traceback__))

    # Log the error with context
    log_message = f"Error in {function_name}: {message}\nError: {str(e)}\nTraceback:\n{traceback_str}"
    print(log_message)

    # Prepare response data
    response_data = {
        "status": "error",
        "message": message,
        "error": str(e)
    }
    
    # Only include traceback in non-production environments if explicitly requested
    if DEBUG:
        response_data["traceback"] = traceback_str

    return Response(response_data, status=status_code)