# Backend for Sport Betting Apps

This is the backend for applications related to sport betting, built with Django and Django REST Framework.

## Steps to Run Locally

1. **Install Pipenv**  
   Ensure Pipenv is installed to manage dependencies:
   ```bash
   pip install pipenv
   ```

2. **Set Up the Environment**  
   Navigate to the `backend/` folder and start the virtual environment:
   ```bash
   pipenv install
   pipenv shell
   ```

3. **Run the Server**  
   Start the Django development server:
   ```bash
   python manage.py runserver
   ```
   Access the API at `http://localhost:8000/odds/test/`.

4. **Create a `.env` File**  
   In the `backend/` folder, create a file named `.env` with the following content:
   ```
   DJANGO_DEBUG=True
   TOKEN="xxxxxxxxxxxxxxxxx"  # Use a secure token; match this with the deployed version
   ```
   - The `TOKEN` is used for authentication.
   - Add `.env` to `.gitignore` to keep it secure.

## Deploying to Render

1. **Create a Render Account**  
   Sign up at [render.com](https://render.com) if you don’t have an account.

2. **Create a New Project**  
   In the Render dashboard, click **New > Web Service**.

3. **Connect to GitHub**  
   - Link your GitHub account.
   - Select your repository and set the **Root Directory** to `backend/` (not the main repo root).

4. **Configure the Web Service**  
   - **Build Command**: `pipenv install`
   - **Start Command**: `gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT`

5. **Set Environment Variables**  
   In the Render dashboard under **Environment**, add:
   - Key: `DJANGO_DEBUG`
     - Value: `False`
   - Key: `TOKEN`
     - Value: `"xxxxxxxxxxxxxxxxx"` (same as local `.env`)
   - (Optional) Key: `SECRET_KEY`
     - Value: A secure key (generate with `python -c "import secrets; print(secrets.token_urlsafe(50))"`)
   - Save and redeploy after adding variables.

6. **Deploy and Test**  
   Push any change to GitHub to trigger a redeploy. Access your app at `https://yourapp.onrender.com/odds/test/` and verify it works.

## Notes
- The `TOKEN` ensures authentication between the backend and other services.
- Keep `DEBUG = False` on Render for production security.
- Check Render logs if deployment fails.





## Projects

### Odds

Gets the odds from betting websites.