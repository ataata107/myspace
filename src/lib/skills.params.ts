import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'aws',
		color: 'cyan',
		description:"In my experience with Amazon EC2 (Elastic Compute Cloud), I have honed my skills in launching and configuring instances, catering to diverse operating systems such as Linux and Windows. Creating custom Amazon Machine Images (AMIs) to replicate specific server environments efficiently is a task I perform seamlessly. Additionally, I specialize in implementing auto-scaling groups to dynamically manage workloads and leverage AWS Systems Manager for EC2 management and automation, streamlining operational tasks. Configuring security groups and network access control lists (ACLs) is second nature to me, ensuring a robust and finely tuned approach to network security. \n Moving on to Amazon EMR (Elastic MapReduce), I possess adept knowledge in deploying and managing Apache Hadoop and Apache Spark clusters. Customizing EMR clusters based on specific processing and storage requirements is one of my strengths. I seamlessly integrate EMR with other AWS services, such as S3, DynamoDB, and Redshift, creating comprehensive data processing solutions. Optimizing EMR performance through strategic selection of instance types, bootstrap actions, and configurations is part of my proficiency. Security is a top priority, and I implement encryption in transit and at rest to ensure the integrity of data in EMR clusters. \nWhen it comes to Amazon VPC (Virtual Private Cloud), my expertise lies in designing and implementing tailored VPC architectures to meet the specific needs of applications. Configuring and managing subnets, route tables, and Internet Gateways to establish robust network infrastructures is an area where I excel. I implement VPC peering and VPN connections to facilitate secure communication between different network environments. Leveraging AWS Direct Connect, I establish dedicated, low-latency network connections for enhanced performance. Network Access Control Lists (NACLs) are part of my toolkit for implementing additional layers of network security within VPCs.\nIn the realm of AWS Identity and Access Management (IAM), I am proficient in managing IAM roles and policies to establish granular access controls within AWS environments. My skills include implementing multi-factor authentication (MFA) for an added layer of security. Seamlessly integrating IAM with EC2 instances and various services to enforce and control permissions is an essential aspect of my IAM expertise. Auditing and monitoring IAM activities for compliance and security are integral aspects of my IAM proficiency.\nTransitioning to AWS CloudFormation, I am well-versed in defining infrastructure as code using CloudFormation templates. Automation of AWS resource and service deployment is a core competency, thanks to my CloudFormation skills. I manage stacks, update templates, and handle dependencies proficiently in CloudFormation. Version controlling and tracking changes in infrastructure are routine tasks in my CloudFormation workflows.\nFinally, in AWS Monitoring and Logging, I have practical experience implementing AWS CloudWatch for effective monitoring and alerting. Configuring CloudWatch Logs for centralized log management is a key aspect of my expertise. I leverage AWS Config for maintaining a detailed resource inventory and configuration history. Creating custom metrics and dashboards to monitor system performance is part of my routine in ensuring optimal AWS infrastructure operation.",
		logo: Assets.AWS,
		name: 'AWS'
	}),
	s({
		slug: 'scala',
		color: 'pink',
		description:"In my journey with Scala, my focus has prominently revolved around leveraging its capabilities in tandem with Apache Spark for big data processing. Scala's expressive syntax and functional programming paradigm perfectly align with Spark's distributed computing model, allowing me to write robust, scalable, and efficient data processing applications. I've harnessed the conciseness of Scala to streamline the development of complex Spark jobs, taking advantage of features like pattern matching and case classes for clarity and maintainability. My proficiency extends to designing and implementing Spark applications in Scala, utilizing the RDD (Resilient Distributed Datasets) and DataFrame APIs to manipulate and transform large datasets seamlessly. The strong type system of Scala has proven beneficial in catching errors at compile-time, enhancing the reliability of Spark applications. Furthermore, I've explored the asynchronous and concurrent programming features of Scala in the context of Spark streaming applications, where real-time data processing demands a high degree of responsiveness. Leveraging Scala's Futures and Akka actors within Spark streaming pipelines has allowed me to create resilient and responsive data processing workflows. In addition to functional programming, I've integrated Scala seamlessly with Spark SQL for structured data processing, enabling me to express complex data transformations using SQL-like queries. This has facilitated the creation of more readable and declarative Spark applications. Overall, my expertise in Scala extends beyond its standalone use, encompassing its integration with Apache Spark to address the intricacies of big data processing, making me adept at crafting efficient and scalable solutions for data-intensive tasks.",
		logo: Assets.Scala,
		name: 'Scala'
	}),
	s({
		slug: 'mysql',
		color: 'orange',
		description:"In MySQL, I proficiently use nested queries and joins for intricate data retrieval and aggregation. Employing JDBC, I establish secure connections using prepared statements to prevent SQL injection. Following DAO design patterns, I encapsulate database interactions for modularity in Java applications. My MySQL expertise spans both advanced SQL operations and best practices in Java-MySQL connectivity.",
		logo: Assets.MySql,
		name: 'MySql'
	}),
	s({
		slug: 'spark',
		color: 'yellow',
		description:"In my Spark endeavors, I've seamlessly integrated data from diverse sources using spark-submit and spark-shell, allowing ingestion from Hive, SQL, and distributed Hadoop warehouses. Leveraging Spark SQL, I've undertaken data engineering tasks, employing User Defined Functions (UDFs) and utilizing the power of Spark's DataFrame API for efficient data processing. This involves tasks like filtering, transformation, and aggregation, optimizing the data for subsequent analytics. In the realm of monitoring, I've adeptly employed tools like the YARN manager to oversee the Spark cluster. This includes tracking job progress, resource utilization, and ensuring efficient task execution. My hands-on experience extends to leveraging Spark's scalability by deploying applications on cluster management systems such as Apache Hadoop YARN, ensuring fault tolerance and optimal performance.",
		logo: Assets.Spark,
		name: 'Spark'
	}),
	s({
		slug: 'springboot',
		color: 'blue',
		description:"In my utilization of Spring Boot, I've harnessed its versatility by incorporating various features and annotations to enhance the development and functionality of Java applications. Leveraging Spring Boot's annotation-driven development, I've utilized @Bean annotations to define and configure beans, facilitating modular and reusable components within the application. To manage cross-cutting concerns and manipulate incoming HTTP requests, I've effectively employed request interceptors, using Spring Boot's HandlerInterceptor interface. This enables the interception and modification of requests and responses, allowing for custom pre- and post-processing logic. For streamlined API documentation, I've integrated Swagger UI with Spring Boot, utilizing annotations such as @Api, @ApiOperation, and @ApiResponse to document and describe RESTful APIs. This not only enhances the developer experience by providing a clear interface for API exploration but also facilitates collaboration between development teams. The use of @Component annotations has been pivotal in declaring and registering Spring beans, aiding in the organization and management of application components. Whether it's a service, repository, or any other bean, this annotation has played a key role in simplifying dependency injection and promoting a clean, modular codebase. Additionally, I've taken advantage of other annotations like @RestController to define RESTful controllers, @Service for service components, and @Repository for data access components. These annotations contribute to the creation of a well-structured and easily maintainable Spring Boot application. In summary, my experience with Spring Boot involves a comprehensive utilization of annotations such as @Bean, @Component, and others, along with the integration of features like request interceptors and Swagger UI. This approach not only simplifies the development process but also ensures the creation of robust, well-documented, and easily maintainable Java applications.",
		logo: Assets.SpringBoot,
		name: 'SpringBoot'
	}),
	s({
		slug: 'solr',
		color: 'yellow',
		description:"In my experience with Apache Solr, I've maximized its powerful string search capabilities, employing sophisticated text processing and indexing features to enable precise and versatile searches. The flexibility of Solr's query language has allowed me to craft intricate search queries, encompassing wildcard searches, fuzzy matching, and phrase queries, ensuring an effective and accurate search experience. Integrating Solr seamlessly into Spring Boot applications has been a key aspect of my work. Through the Spring Data Solr module, I've effortlessly connected Spring Boot with Solr, leveraging auto-configuration for easy setup. Annotation-driven mapping, with @SolrDocument and @Field, has enabled the seamless translation of Java objects into Solr documents, simplifying the indexing and retrieval process. The use of Solr repositories, annotated with @SolrCrudRepository, has provided a structured approach to performing CRUD operations on Solr indexes, enhancing code modularity. Additionally, I've harnessed Spring Boot's embedded server capabilities for streamlined deployment, ensuring the simultaneous initiation and shutdown of the Solr server with the application. This integration, coupled with Spring Boot's RESTful services, facilitates the creation of search APIs and endpoints, enabling smooth communication between the Spring Boot application and Solr through HTTP requests. In essence, the combined utilization of Solr's search prowess and Spring Boot's development simplicity has empowered the creation of robust and scalable search functionalities within Java applications.",
		logo: Assets.Solr,
		name: 'Solr'
	}),
	s({
		slug: 'snowflake',
		color: 'orange',
		description:"In my experience, Snowflake has proven to be a valuable asset for big data query processing, particularly when seamlessly integrated into Spark applications using JDBC. Snowflake's cloud-based data warehousing architecture, with its separation of storage and compute resources, aligns well with the demands of scalable data processing. Leveraging Snowflake's native support for JDBC, I've efficiently ingested and processed substantial datasets within Spark, taking advantage of Snowflake's dynamic compute resource allocation based on workload requirements. This integration enhances the overall efficiency and scalability of big data analytics tasks by simplifying data ingestion processes. The SQL-based interface of Snowflake has been instrumental in crafting and executing complex queries within Spark applications, enabling transformation and enrichment of data directly within Snowflake. This integration has facilitated seamless interactions between Spark and Snowflake, ensuring a smooth workflow for diverse data processing tasks. Overall, the synergy achieved through Snowflake's robust capabilities and Spark's data processing prowess, facilitated by JDBC connectivity, has significantly contributed to the success of big data query processing and data ingestion in my projects.",
		logo: Assets.Snowflake,
		name: 'Snowflake'
	}),
	s({
		slug: 'bash',
		color: 'pink',
		description:"In my experience, Bash scripting has proven indispensable for creating deployment scripts that orchestrate the deployment of diverse applications and services. Whether deploying Amazon EMR clusters, Solr instances, .NET servers, or handling routine tasks like patching security vulnerabilities and setting up cron jobs, Bash scripts provide a unified and efficient approach to managing these tasks. For deploying Amazon EMR clusters, Bash scripts allow for the automation of the entire deployment process, from configuring cluster settings to launching the instances. This ensures consistency in the deployment and simplifies the scaling of resources based on varying workloads. In the context of Solr, .NET servers, and other applications, Bash scripts streamline the deployment workflow by automating the necessary steps, such as copying files, configuring settings, and restarting services. This not only saves time but also reduces the likelihood of manual errors in the deployment process. Handling security vulnerabilities is a critical aspect of system maintenance. Bash scripts are invaluable for automating security patching processes, allowing for the systematic application of patches and updates across multiple servers. This proactive approach enhances the overall security posture of the system. Creating and managing cron jobs for scheduled tasks is another area where Bash excels. Through scripting, cron jobs can be easily configured to automate repetitive tasks, such as backups, log rotations, or any other routine maintenance activities. This ensures that essential tasks are executed at predefined intervals without manual intervention. In summary, Bash scripting serves as a versatile tool for creating deployment scripts that automate the deployment of various services like EMR, Solr, and .NET servers. Additionally, it proves instrumental in addressing security vulnerabilities through automated patching processes and efficiently managing scheduled tasks via cron jobs, enhancing the overall efficiency and reliability of system administration tasks.",
		logo: Assets.Bash,
		name: 'Bash'
	}),
	s({
		slug: 'java',
		color: 'cyan',
		description:"In my experience with Java, its versatility has been evident in various domains, with a notable highlight being its seamless integration with Apache Spark. Java serves as a robust entry point for Spark jobs, allowing developers to harness the power of Spark's distributed computing capabilities within their Java applications. This integration is facilitated through Spark's Java API, which enables the creation of Spark applications using familiar Java constructs. Java's compatibility with Scala, another language prevalent in the Spark ecosystem, further extends its utility. Spark, being developed in Scala, inherently supports interoperability with Java, enabling smooth communication and collaboration between Java and Scala codebases. This compatibility is crucial in diverse scenarios, where different language preferences coexist within a Spark environment. In the context of Spark jobs, Java's object-oriented nature and rich ecosystem of libraries make it an excellent choice for developing scalable and maintainable applications. Leveraging Java for Spark tasks provides the advantages of strong typing, modular code organization, and seamless integration with existing Java-based systems.",
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'python',
		color: 'blue',
		description:"Throughout my professional journey, Python has been my language of choice, and the combination of PyTorch with other powerful libraries like OpenCV, Pandas, and Matplotlib has been a dynamic force in my exploration of data science and machine learning. PyTorch has played a central role in my endeavors, particularly in training advanced models like Generative Adversarial Networks (GANs) and transformers. Its dynamic computation graph and user-friendly interface have facilitated the experimentation and fine-tuning necessary for pushing the boundaries of generative models and natural language processing tasks. In the realm of computer vision, OpenCV has been an invaluable companion to Python. I've employed its comprehensive set of tools for image and video processing, seamlessly integrating it with PyTorch to preprocess and augment datasets for model training. The synergy between PyTorch and OpenCV has been crucial in tasks ranging from object detection to facial recognition. For data manipulation and analysis, Pandas has been a go-to library. Combining the power of Pandas with PyTorch, I've effortlessly handled and preprocessed datasets before feeding them into machine learning models. The ease with which Python allows the integration of these libraries ensures a smooth transition from data exploration to model training. Matplotlib has been instrumental in visualizing the outcomes of my machine learning experiments. By leveraging Matplotlib with PyTorch, I've created informative plots and charts to interpret model performance, visualize training progress, and communicate complex findings effectively. In summary, the synergy between Python, PyTorch, OpenCV, Pandas, and Matplotlib has defined my approach to data science and machine learning. From training sophisticated models to processing datasets and presenting results, the collective power of these libraries within the Python ecosystem has provided a robust foundation for innovation and problem-solving in diverse domains.",
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
