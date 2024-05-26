import { Wrap,WrapItem, Card, CardHeader, CardBody, CardFooter, List, Box, Button, Icon, Flex, Heading, Input, ListItem, Divider } from '@chakra-ui/react';
import React,{ useState, useEffect,useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdSend, MdFlashOn } from 'react-icons/md';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'; // Assuming npm install is done
import Lorem from "./Lorem.js";
import { Avatar } from '@chakra-ui/react'


const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "XXXXXXXXXXXXXXXXXXX"; // Replace with your actual API key

export default function Chatbox() {
    const [userInput,setUserInput]=useState("");
    const [toogle,setToogle]=useState("flex");
    

    const handleInputChange=(e)=>{
        setUserInput(e.target.value);
    }

    const hideChatbot=()=>{
        setToogle("none");
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 1,
      topK: 64,
      topP: 0.95,
      maxOutputTokens: 8192,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "who are you?"}],
        },
        {
          role: "model",
          parts: [{ text: "I am Dip, an AI assistant created by Dipesh Pandit. I can't claim to be a real person, but I can process information and respond to your questions in a comprehensive and informative way, even if they are open ended, challenging, or strange. \n\nWhat can I help you with today? 😊"}],
        },
        {
          role: "user",
          parts: [{ text: "why should I use this website ?"}],
        },
        {
          role: "model",
          parts: [{ text: "That's a great question! You should consider using Twinbox because we offer a fantastic deal for students like you: **100GB of completely free cloud storage for life!**  We understand that storage can be expensive, and we want to make sure you have a reliable place to keep your important files without breaking the bank. \n\nHere are a few more reasons why Twinbox is a great choice:\n\n* **User-friendly interface:**  We've designed Twinbox to be simple and intuitive, so you can easily upload, download, and manage your files.\n* **Google sign-in option:** No need to remember another password! You can quickly sign in using your existing Google account. \n* **No hidden fees or future payments:**  The 100GB is yours to use for free, forever.  \n* **Created by students, for students:**  Twinbox was founded by Dipesh Pandit and Diwas Pandit, who understand the unique needs and challenges faced by students. \n\nWe're confident that Twinbox will be a valuable tool for you. Give it a try and see for yourself!"}],
        },
        {
          role: "user",
          parts: [{ text: "what are the benefit we get after using it?"}],
        },
        {
          role: "model",
          parts: [{ text: "You're right to ask about the benefits! Here's how Twinbox can help you:\n\n* **Peace of mind:**  100GB of free storage means you'll always have enough space for your files. No more worrying about running out of room or deleting important documents!\n* **Accessibility:** Access your files from any device with an internet connection, anytime, anywhere. This is especially useful for group projects or if you need to work on assignments while on the go.\n* **Easy file sharing:**  Share your files with classmates, friends, or family easily and securely. \n* **Organization:**  Say goodbye to cluttered desktops and lost files! Twinbox allows you to organize your files neatly in folders and easily search for what you need.\n* **Security:**  We take data security seriously. Your files are safe and protected with us. \n* **Focus on studies:**  By providing free storage, we aim to ease your financial burden so you can focus on what's important: your education. \n\nWe believe that by providing this essential service for free, we can make a real difference in the lives of students."}],
        },
        {
          role: "user",
          parts: [{ text: "hlo"}],
        },
        {
          role: "model",
          parts: [{ text: "You're right to ask about the benefits! Here's how Twinbox can help you:\n\n* **Peace of mind:**  100GB of free storage means you'll always have enough space for your files. No more worrying about running out of room or deleting important documents!\n* **Accessibility:** Access your files from any device with an internet connection, anytime, anywhere. This is especially useful for group projects or if you need to work on assignments while on the go.\n* **Easy file sharing:**  Share your files with classmates, friends, or family easily and securely. \n* **Organization:**  Say goodbye to cluttered desktops and lost files! Twinbox allows you to organize your files neatly in folders and easily search for what you need.\n* **Security:**  We take data security seriously. Your files are safe and protected with us. \n* **Focus on studies:**  By providing free storage, we aim to ease your financial burden so you can focus on what's important: your education. \n\nWe believe that by providing this essential service for free, we can make a real difference in the lives of students."}],
        },
        {
          role: "user",
          parts: [{ text: "hlo"}],
        },
        {
          role: "model",
          parts: [{ text: "Hello! 👋  How can I help you today? 😊"}],
        },
        {
          role: "user",
          parts: [{ text: "who are you?"}],
        },
        {
          role: "model",
          parts: [{ text: "I'm Dip, a friendly AI assistant here to tell you about Twinbox! \n\nTwinbox is a cloud storage service created by students, for students.  We offer 100 GB of free storage, forever! \n\nWhat would you like to know about Twinbox?"}],
        },
        {
          role: "user",
          parts: [{ text: "when was it created?"}],
        },
        {
          role: "model",
          parts: [{ text: "While I can't give you a specific date, I can tell you that Twinbox was created relatively recently by Dipesh Pandit and Diwas Pandit.  They saw that many students were struggling to afford cloud storage and decided to do something about it!  Pretty cool, right? \n\nAre you interested in learning more about the free storage offered by Twinbox?"}],
        },
        {
          role: "user",
          parts: [{ text: "yes"}],
        },
        {
          role: "model",
          parts: [{ text: "Great! Here's the deal with Twinbox's free storage:\n\n* **100 GB for life:** That's right, you get a whole 100 GB of cloud storage completely free, for as long as you have your account. No hidden fees, no future payments, just pure storage goodness. \n* **Perfect for students:**  We understand that student budgets can be tight. That's why we're committed to offering this essential service without any cost to you. \n* **Store anything:**  Use your 100 GB to store all kinds of files: school documents, photos, videos, music, and more.  \n* **Access from anywhere:**  Access your files from your computer, phone, or tablet – anytime, anywhere with an internet connection. \n\nReady to claim your free 100 GB?  Just head to the Twinbox website!  Let me know if you have any other questions."}],
        },
      ],
    });

    const [chatHistory, setChatHistory] = useState({
        interactions: [
            {
                input: "who are you?",
                output: "I am an AI assistant..."
              }
        ]
    });

    // Function to add a new interaction
    function addInteraction(userInput, botOutput) {
        const newInteractions = [...chatHistory.interactions, {
            input: userInput,
            output: botOutput
        }];
        setChatHistory({ interactions: newInteractions });
        setUserInput("")
    }

    const handleSubmit= async()=>{
        const result = await chat.sendMessage(userInput);
        const response = result.response;
        const fullResponse=response.text();
        addInteraction(userInput, fullResponse);
    }

    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, [chatHistory.interactions]); // Include the correct dependency here

  return (
    <Box width="100vw" height="100vh" background="gray" backgroundImage=" linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)">
        <Lorem/>
      <Card
        position="fixed"
        top="3rem"
        right={{ base: "0", md: "3rem" }}
        width="25rem"
        height="40rem"
        zIndex="1000"
        display={toogle}
      >
        <CardHeader>
          <Flex align="center" justify="space-between">
            <Heading as="h6" size="md">
              Gemini Powered<Icon color="blue" as={MdFlashOn} />Chatbot
            </Heading>
            <Button colorScheme="blue" onClick={hideChatbot}>
              <Icon as={FaTimes} />
            </Button>
          </Flex>
        </CardHeader>
        <CardBody>
            <Box overflowY="scroll"  height="27rem" pr="1rem" ref={chatContainerRef}>
            {chatHistory.interactions.map((message, index) => (
                <React.Fragment>
                <Flex key={index} justify='flex-end' pb="1rem">
                    <Box >{message.input}</Box>
                    <Avatar ml={2} name="Human" size="xs" />
                </Flex>
                <Flex key={index} justify='flex-start' pb="1rem">
                    <Avatar name="ChatBot" size="xs" />
                    <Box ml={2}>{message.output}</Box>
                </Flex>
            </React.Fragment>
            ))}
            </Box>
        </CardBody>
        <CardFooter>
            <Input
                placeholder="Ask me anything..."
                type="text"
                value={userInput}
                onChange={handleInputChange}
            />
            <Button colorScheme="blue" onClick={handleSubmit}>
                <Icon as={MdSend} />
            </Button>
        </CardFooter>
        </Card>
    </Box>

)
}
