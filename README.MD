Sure! Below is the `README.md` file for the Chrome extension, which explains how to install it as an unpacked extension and how to use it.

---

# Bulk Delete IDs Chrome Extension

This Chrome extension allows you to accept a list of IDs from the user and then send buffered DELETE API requests (using jQuery) to a URL for each ID within the context of the active tab. The requests are buffered to prevent overwhelming the server.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Step 1: Prepare the Extension Files](#step-1-prepare-the-extension-files)
  - [Step 2: Load the Extension into Chrome](#step-2-load-the-extension-into-chrome)
- [Usage](#usage)
  - [Step 1: Navigate to the Target Web Page](#step-1-navigate-to-the-target-web-page)
  - [Step 2: Open the Extension Popup](#step-2-open-the-extension-popup)
  - [Step 3: Enter the List of IDs](#step-3-enter-the-list-of-ids)
  - [Step 4: Start the Deletion Process](#step-4-start-the-deletion-process)
  - [Step 5: Monitor Progress](#step-5-monitor-progress)
- [Configuration](#configuration)
  - [Adjusting the Delay Between Requests](#adjusting-the-delay-between-requests)
  - [Customizing the API Endpoint](#customizing-the-api-endpoint)
  - [Restricting Host Permissions](#restricting-host-permissions)
- [Security Considerations](#security-considerations)
- [Troubleshooting](#troubleshooting)
- [Support](#support)

---

## Features

- **User Input**: Accepts a list of IDs through a simple popup interface.
- **Active Tab Context**: Runs JavaScript in the active tab's context, ensuring that requests include any necessary authentication tokens or cookies.
- **Buffered Requests**: Sends DELETE requests with a delay between each to prevent server overload.
- **jQuery Integration**: Utilizes jQuery for simplified AJAX requests.

## Prerequisites

- **Google Chrome**: Ensure you have the latest version of Google Chrome installed.
- **Basic Knowledge**: Familiarity with Chrome extensions and how to load unpacked extensions.

## Installation

### Step 1: Prepare the Extension Files

1. Download the files here


### Step 2: Load the Extension into Chrome

1. **Open Chrome Extensions Page**:

   - Open Google Chrome.
   - Navigate to `chrome://extensions/` in the address bar.

2. **Enable Developer Mode**:

   - Toggle the **Developer mode** switch in the upper right corner of the page.

3. **Load Unpacked Extension**:

   - Click the **Load unpacked** button that appears.
   - In the file dialog, navigate to the folder where you saved the extension files.
   - Select the folder and click **Open**.

4. **Confirm Installation**:

   - The extension should now appear in your list of installed extensions.
   - You may see a notification confirming that the extension has been added.

## Usage

### Step 1: Navigate to the Target Web Page

- Open a new tab and go to the web page where the DELETE API requests should be made.
- Ensure you are logged in or have the necessary permissions if authentication is required.

### Step 2: Open the Extension Popup

- Click on the **Extensions** icon (puzzle piece) next to the Chrome address bar.
- Find **Bulk Delete IDs** in the list.
- Click on the extension name to open the popup interface.

### Step 3: Enter the List of IDs

- In the popup window, you'll see a textarea labeled **Bulk Delete IDs**.
- Enter the IDs you wish to delete, separated by commas, spaces, or new lines.

  **Examples**:

  - Using commas:

    ```
    12345,67890,abcdef
    ```

  - Using new lines:

    ```
    12345
    67890
    abcdef
    ```

### Step 4: Start the Deletion Process

- Click the **Start Deleting** button.
- The extension will begin sending DELETE requests for each ID, one at a time, with a delay between each request.

### Step 5: Monitor Progress

- Since the requests are made in the context of the active tab, you can monitor the progress through the browser's console.
- To open the console:

  1. Right-click anywhere on the web page.
  2. Select **Inspect** from the context menu.
  3. In the developer tools that open, click on the **Console** tab.
  4. You should see logs indicating the success or failure of each DELETE request.

## Configuration

### Adjusting the Delay Between Requests

- The default delay between each DELETE request is **1 second**.
- To change the delay:

  1. Open `contentScript.js` in a text editor.
  2. Find the line: `const delay = 1000;`
  3. Change `1000` to your desired delay in milliseconds (e.g., `2000` for 2 seconds).

### Customizing the API Endpoint

- The extension constructs the API URL using the active tab's origin and a default endpoint.
- To adjust the endpoint:

  1. Open `contentScript.js`.
  2. Locate the line:

     ```javascript
     let apiUrl = `${window.location.origin}/api/delete/${id}`; // Adjust the endpoint as needed
     ```

  3. Modify the path to match your API's endpoint. For example:

     ```javascript
     let apiUrl = `${window.location.origin}/your/custom/endpoint/${id}`;
     ```

### Restricting Host Permissions

- For security purposes, it's recommended to limit the extension's permissions to specific domains.
- To restrict host permissions:

  1. Open `manifest.json`.
  2. Replace `"<all_urls>"` in the `"host_permissions"` section with the specific URLs you need. For example:

     ```json
     "host_permissions": ["https://www.example.com/*"]
     ```

## Security Considerations

- **Host Permissions**: Limiting permissions helps prevent the extension from accessing unintended sites.
- **Authentication**: DELETE requests are made from the active tab's context, using any existing authentication tokens or cookies.
- **Data Safety**: Ensure that you have the necessary permissions to delete the IDs on the target server to avoid data loss or policy violations.

## Troubleshooting

- **Error Injecting Scripts**:

  - **Issue**: You receive an error message stating that scripts couldn't be injected.
  - **Solution**: Ensure that the target web page allows script execution and that all extension files are correctly included.

- **DELETE Requests Failing**:

  - **Issue**: The console logs indicate that DELETE requests are failing.
  - **Solution**:

    - Check if the API endpoint URL is correct.
    - Ensure that you have the necessary permissions and that authentication tokens are valid.
    - Verify that the server allows DELETE requests from your context.

- **CORS Errors**:

  - **Issue**: You encounter Cross-Origin Resource Sharing (CORS) errors.
  - **Solution**: Since requests are made from the page context, CORS issues should be minimized. If they occur, you may need to adjust server-side CORS policies.

## Support

If you have any questions or need further assistance, please feel free to reach out through the extension's support page or submit an issue on the repository if available.
