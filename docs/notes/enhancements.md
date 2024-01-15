# Backlogs

## FrontEnd

1. For [API Service](../../frontend-react-materialui/src/services/api_service.ts) the error handling has to be separated into a separate helper method like
   ```javascript
     createError(message: string, status: number) {
        const error = new Error(message);
        const errorWithStatus: ErrorWithStatusCode = { error };
        errorWithStatus.status = status;
        return errorWithStatus;
    }
   ```
   Replace the **_console.log_**. And this should be called from every API method like
   ```javascript
   if (response && response.status === 200) {
     return response.data;
   }
   throw this.createError(response.statusText, response.status);
   ```

## Backend
