(function() {

    if (typeof window.delightSetting === "undefined") {
        console.error("missing delightSetting")
        return
    }
    if (typeof window.delightSetting.key === "undefined") {
        console.error("missing delightSetting key value")
        return
    }
    if (typeof window.delightSetting.key !== "string") {
        console.error("delightSetting key value must be a string")
        return
    }
    // Button
    delightChatWidgetButton = document.createElement('button');
    delightChatWidgetButton.style.zIndex=2147483000;
    delightChatWidgetButton.style.width="60px";
    delightChatWidgetButton.style.height="60px";
    delightChatWidgetButton.style.background="#ffffff";
    delightChatWidgetButton.style.display="flex";
    delightChatWidgetButton.style.alignItems="center";
    delightChatWidgetButton.style.justifyContent="center";
    delightChatWidgetButton.style.textDecoration="none";
    delightChatWidgetButton.style.borderRadius="50%";
    delightChatWidgetButton.style.color="#ffffff";
    delightChatWidgetButton.style.fontSize="40px";
    delightChatWidgetButton.style.boxShadow="2px 2px 2px black";
    delightChatWidgetButton.style.position="fixed";
    delightChatWidgetButton.style.right="20px";
    delightChatWidgetButton.style.bottom="20px";
    // Img
    delightChatWidgetButtonImg = document.createElement('img');
    delightChatWidgetButtonImg.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA0MiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjc3NzQgMi4wODM3OUMzMy43Nzc0IDEuMDQ3NDIgMzIuOTM3MyAwLjIwNzI3NiAzMS45MDA5IDAuMjA3Mjc1QzMwLjg2NDUgMC4yMDcyNzUgMzAuMDI0NCAxLjA0NzQyIDMwLjAyNDQgMi4wODM3OUwzMC4wMjQ0IDE4LjAzNDFDMzAuMDI0NCAxOS4wNzA1IDMwLjg2NDUgMTkuOTEwNyAzMS45MDA5IDE5LjkxMDdDMzIuOTM3MyAxOS45MTA3IDMzLjc3NzQgMTkuMDcwNSAzMy43Nzc0IDE4LjAzNDFWMi4wODM3OVoiIGZpbGw9IiMwMDlCRkYiLz4KPHBhdGggZD0iTTQxLjI4MzUgOC42NTE1OUM0MS4yODM1IDcuNjE1MjIgNDAuNDQzMyA2Ljc3NTA3IDM5LjQwNjkgNi43NzUwN0MzOC4zNzA2IDYuNzc1MDcgMzcuNTMwNCA3LjYxNTIyIDM3LjUzMDQgOC42NTE1OVYxMS40NjY0QzM3LjUzMDQgMTIuNTAyNyAzOC4zNzA2IDEzLjM0MjkgMzkuNDA2OSAxMy4zNDI5QzQwLjQ0MzMgMTMuMzQyOSA0MS4yODM1IDEyLjUwMjcgNDEuMjgzNSAxMS40NjY0VjguNjUxNTlaIiBmaWxsPSIjMDA5QkZGIi8+CjxwYXRoIGQ9Ik0yMi41MTgyIDEzLjM0MzFDMjIuNTE4MiAxNC4zNzk1IDIzLjM1ODMgMTUuMjE5NiAyNC4zOTQ3IDE1LjIxOTZDMjUuNDMxIDE1LjIxOTYgMjYuMjcxMiAxNC4zNzk1IDI2LjI3MTIgMTMuMzQzMVY3LjI0NDQzQzI2LjI3MTIgNi4yMDgwNiAyNS40MzEgNS4zNjc5MiAyNC4zOTQ3IDUuMzY3OTJDMjMuMzU4MyA1LjM2NzkyIDIyLjUxODIgNi4yMDgwNiAyMi41MTgyIDcuMjQ0NDNWMTMuMzQzMVoiIGZpbGw9IiMwMDlCRkYiLz4KPHBhdGggZD0iTTE1LjAxMjIgMTQuMjgxM0MxNS4wMTIyIDE1LjMxNzcgMTUuODUyMyAxNi4xNTc4IDE2Ljg4ODcgMTYuMTU3OEMxNy45MjUxIDE2LjE1NzggMTguNzY1MiAxNS4zMTc3IDE4Ljc2NTIgMTQuMjgxM0wxOC43NjUyIDUuODM3MDFDMTguNzY1MiA0LjgwMDY0IDE3LjkyNTEgMy45NjA0OSAxNi44ODg3IDMuOTYwNDlDMTUuODUyMyAzLjk2MDQ5IDE1LjAxMjIgNC44MDA2NCAxNS4wMTIyIDUuODM3MDFWMTQuMjgxM1oiIGZpbGw9IiMwMDlCRkYiLz4KPHBhdGggZD0iTTcuNTA2MTIgMTUuNjg4N0M3LjUwNjEyIDE2LjcyNTEgOC4zNDYyNiAxNy41NjUyIDkuMzgyNjMgMTcuNTY1MkMxMC40MTkgMTcuNTY1MiAxMS4yNTkxIDE2LjcyNTEgMTEuMjU5MSAxNS42ODg3TDExLjI1OTEgMy45NjA0OUMxMS4yNTkxIDIuOTI0MTIgMTAuNDE5IDIuMDgzOTggOS4zODI2MyAyLjA4Mzk4QzguMzQ2MjYgMi4wODM5OCA3LjUwNjEyIDIuOTI0MTIgNy41MDYxMiAzLjk2MDQ5TDcuNTA2MTIgMTUuNjg4N1oiIGZpbGw9IiMwMDlCRkYiLz4KPHBhdGggZD0iTTIuMDUwNjJlLTA3IDEwLjk5NzVDMi45NTY2NWUtMDcgMTIuMDMzOCAwLjg0MDE0NCAxMi44NzQgMS44NzY1MSAxMi44NzRDMi45MTI4OCAxMi44NzQgMy43NTMwMyAxMi4wMzM4IDMuNzUzMDMgMTAuOTk3NVY4LjY1MTgyQzMuNzUzMDMgNy42MTU0NSAyLjkxMjg4IDYuNzc1MyAxLjg3NjUxIDYuNzc1M0MwLjg0MDE0NCA2Ljc3NTMgLTkuMDYwMjNlLTA4IDcuNjE1NDUgMCA4LjY1MTgyTDIuMDUwNjJlLTA3IDEwLjk5NzVaIiBmaWxsPSIjMDA5QkZGIi8+CjxwYXRoIGQ9Ik0xNS4wMTIyIDYuNzc1MjlWMTQuMjgxM0MxNS4wMTIyIDEzLjI0NDkgMTQuMTcyIDEyLjQwNDggMTMuMTM1NyAxMi40MDQ4QzEyLjA5OTMgMTIuNDA0OCAxMS4yNTkxIDEzLjI0NSAxMS4yNTkxIDE0LjI4MTNWNi43NzUyOUMxMS4yNTkxIDcuODExNjYgMTIuMDk5MyA4LjY1MTggMTMuMTM1NyA4LjY1MThDMTQuMTcyIDguNjUxOCAxNS4wMTIyIDcuODExNjYgMTUuMDEyMiA2Ljc3NTI5WiIgZmlsbD0iIzAwOUJGRiIvPgo8cGF0aCBkPSJNMzcuNTMwNCAxMS45MzU1QzM3LjUzMDQgMTAuODk5MSAzNi42OTAzIDEwLjA1OSAzNS42NTM5IDEwLjA1OUMzNC42MTc1IDEwLjA1OSAzMy43Nzc0IDEwLjg5OTEgMzMuNzc3NCAxMS45MzU1VjguMTgyNDZDMzMuNzc3NCA5LjIxODgzIDM0LjYxNzUgMTAuMDU5IDM1LjY1MzkgMTAuMDU5QzM2LjY5MDMgMTAuMDU5IDM3LjUzMDQgOS4yMTg4MyAzNy41MzA0IDguMTgyNDZWMTEuOTM1NVoiIGZpbGw9IiMwMDlCRkYiLz4KPHBhdGggZD0iTTM1LjY2MjYgMTYuMTU3NkMzNS42NTk3IDE2LjE1NzYgMzUuNjU2OCAxNi4xNTc3IDM1LjY1MzkgMTYuMTU3N0MzNS42NTEgMTYuMTU3NyAzNS42NDgxIDE2LjE1NzYgMzUuNjQ1MiAxNi4xNTc2SDM1LjY2MjZaIiBmaWxsPSIjMDA5QkZGIi8+Cjwvc3ZnPgo="
    delightChatWidgetButton.append(delightChatWidgetButtonImg)
    
    delightSetting = window.delightSetting;
    params = `key=${delightSetting.key}`;
    if (typeof delightSetting.title === "string") {
        params += `&title=${delightSetting.title}`;
    }

    delightChatWidget = document.createElement('iframe');
    delightChatWidget.id="delight-chat-widget";
    delightChatWidget.src=`https://localhost:3000?${params}`;
    delightChatWidget.style.zIndex=2147483000;
    delightChatWidget.style.width="376px";
    delightChatWidget.style.height="calc(100% - 120px)";
    delightChatWidget.style.maxHeight="704px";
    delightChatWidget.style.borderRadius="10px";
    delightChatWidget.style.border="1px solid #009bff";
    delightChatWidget.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 5px 40px";
    delightChatWidget.style.position="fixed";
    delightChatWidget.style.bottom="100px";
    delightChatWidget.style.right="20px";
    delightChatWidget.style.display="none";
    delightChatWidget.setAttribute("allow","microphone");

    isToggle = false
    function toggleDelightChatWidget() {
        if (isToggle) {
            delightChatWidget.style.display = "none"
        } else {
            delightChatWidget.style.display = "block"
        }
        isToggle = !isToggle
    }
    delightChatWidgetButton.addEventListener("click", toggleDelightChatWidget);

    window.addEventListener('load', function() {
        t = document.body || document.getElementsByTagName("body")[0];
        t.insertBefore(delightChatWidgetButton, t.firstChild);
        t.insertBefore(delightChatWidget, t.firstChild);
    })
})()
