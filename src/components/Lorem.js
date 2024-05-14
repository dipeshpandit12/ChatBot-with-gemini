import { Heading,ListItem,Center,List,ListIcon,Icon,Box,Text,Button} from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons';
import { FaBook } from 'react-icons/fa';

export default function Lorem(){
    return(
		<Box pl="1rem">
			<Heading pt="3rem">Chatbot using Gemini 1.5 - Pro for TwinBox</Heading>
			<Heading as="h4" size="md" pt="2rem">Step Taken:</Heading>
			<List spacing={3} color="white" pl="2rem">
				<br></br>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color="#a8eb12" />
					1. Designed the UI using Chakra UI
				</ListItem>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color="#a8eb12" />
					2. Created system instructions in Google Ai Studio
				</ListItem>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color="#a8eb12" />
					3. Created an API token
				</ListItem>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color="#a8eb12" />
					4. Linked the API in React.js Project
				</ListItem>
   			 </List>
				<Box pt="5rem">
				<Heading as="h5" size="lg"><Icon as={FaBook} w="40px" h="40px" color="#a8eb12"/>  Introduction to Generative & Vertex AI</Heading>
				<Text color="white" pt="2rem">I recently completed a course from Google Cloud Skill Boost titled “Introduction to Generative & Vertex AI.” This course provided me with a foundational understanding of Generative AI, including how it functions, the various model types, and its practical applications. It also introduced me to Vertex AI Studio, which is a platform for building and customizing generative AI models.
					After finishing the course, I applied the knowledge I acquired by creating a chatbot project. This project allowed me to explore the capabilities of Gemini multimodal, engage in prompt design, and experiment with model tuning. It was an enriching experience that not only enhanced my understanding of the subject but also allowed me to develop a tangible application that demonstrates the skills I’ve learned. If you have any questions about my project or if you’d like to know more about my experience with the course, I’d be happy to share! 😊</Text>
				</Box>
				<Center pt="2rem">
					<Button bg="red" color="white" _hover={{color:"black"}} onClick={() => window.location.reload()}>Get Chatbot back</Button>
				</Center>
		</Box>

);
}