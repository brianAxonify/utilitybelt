# Bulk Delete Discover Pages And Posts, Chrome Extension

This Chrome extension allows you to accept a list of IDs from the user and then send buffered DELETE API requests to a URL for each ID within the context of the active tab. The requests are buffered to prevent overwhelming the server.

## WARNING
BY USING THIS YOU UNDERSTAND YOU CAN VERY EASILY DELETE ALOT OF STUFF VERY QUICKLY! PLEASE BE CAREFUL WHEN USING THIS... i beg you

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
- [Support](#support)

---

## Features

- **User Input**: Accepts a list of IDs through a simple popup interface.
- **Active Tab Context**: Runs JavaScript in the active tab's context, ensuring that requests include any necessary authentication tokens or cookies.
- **Buffered Requests**: Sends DELETE requests with a delay between each to prevent server overload.

## Prerequisites

- **Google Chrome**: Ensure you have the latest version of Google Chrome installed.
- **Basic Knowledge**: Familiarity with Chrome extensions and how to load unpacked extensions.

## Installation

### Step 1: Prepare the Extension Files

1. Download the [files here](https://github.com/brianAxonify/utilitybelt/releases/tag/v1.0.0)


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

- The pop up will tell you how many remaining posts it has left to process
- You are free to click off of the pop up and use OTHER TABS normally
- DO NOT DO ANYTHING ON THE AXONIFY TAB YOU ARE RUNNING THIS PROCESS ON!
- A chrome notification will happily inform you when the process is done running, to which you can begin to use all tabs as you wish

## Support

WHEN you have any questions or need further assistance, please feel free to reach out to Brian Best on Slack or open an issue.
