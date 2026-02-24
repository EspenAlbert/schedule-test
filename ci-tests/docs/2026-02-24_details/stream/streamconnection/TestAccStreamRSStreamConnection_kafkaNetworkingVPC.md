# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 22) FAIL(x 12)
Success rate: 64.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 03:39](#error-2026-02-02t0339100000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/697ff21371768356d7f886bc/containers | dev |  | 0.07s
[2026-02-03 00:40](#error-2026-02-03t0040330000) | NO_CAPACITY /api/atlas/v2/groups/698143c3b2e54ee99590a04a/containers | dev |  | 1.05s
[2026-02-03 01:51](#error-2026-02-03t0151060000) | NO_CAPACITY /api/atlas/v2/groups/6981544b8303bfa55c8217d3/containers | dev |  | 1.07s
[2026-02-04 00:54](#error-2026-02-04t0054310000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6982945d09271d271f2f72fe/containers | dev |  | 0.05s
[2026-02-06 00:56](#error-2026-02-06t0056070000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6985378713125e9acd9899c4/containers | dev |  | 0.05s
[2026-02-09 01:02](#error-2026-02-09t0102430000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/69892ce16faf4f440e809673/containers | dev |  | 0.04s
[2026-02-11 01:02](#error-2026-02-11t0102110000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/698bd0c3ef616fcbf2cfb15e/containers | dev |  | 0.06s
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-20 01:13](#error-2026-02-20t0113300000) |  | dev |  | 816.06s
[2026-02-21 01:11](#error-2026-02-21t0111080000) |  | dev |  | 606.06s
[2026-02-23 01:12](#error-2026-02-23t0112310000) |  | dev |  | 644.08s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 865.04s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 minutes
- 2026-01-27 PASS 3 minutes
- 2026-01-28 PASS 2 minutes
- 2026-01-29 PASS 3 minutes
- 2026-01-30: MISSING
- 2026-01-31 PASS 3 minutes
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:10+00:00
```
2026-02-02T03:39:10.8519707Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-02T03:39:10.8531398Z   
2026-02-02T03:39:10.8531841Z     resource_stream_connection_test.go:231: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:39:10.8532269Z         
2026-02-02T03:39:10.8533909Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff21371768356d7f886bc/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 697ff21371768356d7f886bc. Reason: Conflict. Params: [697ff21371768356d7f886bc], BadRequestDetail: 
2026-02-02T03:39:10.8535230Z         
2026-02-02T03:39:10.8535560Z           with mongodbatlas_network_container.test,
2026-02-02T03:39:10.8536192Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-02T03:39:10.8536782Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-02T03:39:10.8537103Z         
2026-02-02T03:39:10.8537426Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (0.74s)
```

- 2026-02-03
  - FAIL a second

### Error 2026-02-03T00:40:33+00:00
```
2026-02-03T00:40:33.6379723Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-03T00:40:33.6394379Z   
2026-02-03T00:40:33.6395533Z     resource_stream_connection_test.go:231: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:33.6396002Z         
2026-02-03T00:40:33.6397864Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c3b2e54ee99590a04a/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 698143c3b2e54ee99590a04a. Reason: Conflict. Params: [AWS 698143c3b2e54ee99590a04a], BadRequestDetail: 
2026-02-03T00:40:33.6399166Z         
2026-02-03T00:40:33.6399516Z           with mongodbatlas_network_container.test,
2026-02-03T00:40:33.6400202Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-03T00:40:33.6400864Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-03T00:40:33.6401193Z         
2026-02-03T00:40:33.6401682Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1.54s)
```

  - FAIL a second

### Error 2026-02-03T01:51:06+00:00
```
2026-02-03T01:51:06.0415097Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-03T01:51:06.0437231Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/a513807d-1c3d-49b2-b5a7-57d5e01579e0/terraform
2026-02-03T01:51:06.0439003Z     resource_stream_connection_test.go:231: Step 1/2 error: Error running apply: exit status 1
2026-02-03T01:51:06.0439806Z         
2026-02-03T01:51:06.0443486Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6981544b8303bfa55c8217d3/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 6981544b8303bfa55c8217d3. Reason: Conflict. Params: [AWS 6981544b8303bfa55c8217d3], BadRequestDetail: 
2026-02-03T01:51:06.0445864Z         
2026-02-03T01:51:06.0446490Z           with mongodbatlas_network_container.test,
2026-02-03T01:51:06.0447737Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-03T01:51:06.0448919Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-03T01:51:06.0449503Z         
2026-02-03T01:51:06.0450281Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1.69s)
```

- 2026-02-04

### Error 2026-02-04T00:54:31+00:00
```
2026-02-04T00:54:31.1367251Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-04T00:54:31.1378851Z    test_working_directory=/tmp/plugintest518140371
2026-02-04T00:54:31.1379484Z     resource_stream_connection_test.go:231: Step 1/2 error: Error running apply: exit status 1
2026-02-04T00:54:31.1379917Z         
2026-02-04T00:54:31.1381597Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945d09271d271f2f72fe/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6982945d09271d271f2f72fe. Reason: Conflict. Params: [6982945d09271d271f2f72fe], BadRequestDetail: 
2026-02-04T00:54:31.1382814Z         
2026-02-04T00:54:31.1383148Z           with mongodbatlas_network_container.test,
2026-02-04T00:54:31.1383784Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-04T00:54:31.1384497Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-04T00:54:31.1384823Z         
2026-02-04T00:54:31.1385151Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (0.47s)
```

- 2026-02-05 PASS 3 minutes
- 2026-02-06

### Error 2026-02-06T00:56:07+00:00
```
2026-02-06T00:56:07.8987216Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-06T00:56:07.8999634Z    test_working_directory=/tmp/plugintest3019296570
2026-02-06T00:56:07.9000518Z     resource_stream_connection_test.go:231: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:56:07.9001082Z         
2026-02-06T00:56:07.9003009Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd9899c4/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6985378713125e9acd9899c4. Reason: Conflict. Params: [6985378713125e9acd9899c4], BadRequestDetail: 
2026-02-06T00:56:07.9004381Z         
2026-02-06T00:56:07.9004730Z           with mongodbatlas_network_container.test,
2026-02-06T00:56:07.9005420Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-06T00:56:07.9006259Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-06T00:56:07.9006591Z         
2026-02-06T00:56:07.9006920Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (0.50s)
```

- 2026-02-07
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-02-08: MISSING
- 2026-02-09

### Error 2026-02-09T01:02:43+00:00
```
2026-02-09T01:02:43.7096245Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-09T01:02:43.7109453Z   
2026-02-09T01:02:43.7110337Z     resource_stream_connection_test.go:231: Step 1/2 error: Error running apply: exit status 1
2026-02-09T01:02:43.7111216Z         
2026-02-09T01:02:43.7114616Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69892ce16faf4f440e809673/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 69892ce16faf4f440e809673. Reason: Conflict. Params: [69892ce16faf4f440e809673], BadRequestDetail: 
2026-02-09T01:02:43.7116220Z         
2026-02-09T01:02:43.7116596Z           with mongodbatlas_network_container.test,
2026-02-09T01:02:43.7117312Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-09T01:02:43.7117976Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-09T01:02:43.7118321Z         
2026-02-09T01:02:43.7118671Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (0.40s)
```

- 2026-02-10 PASS 3 minutes
- 2026-02-11

### Error 2026-02-11T01:02:11+00:00
```
2026-02-11T01:02:11.8378208Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-11T01:02:11.8401976Z   
2026-02-11T01:02:11.8403062Z     resource_stream_connection_test.go:231: Step 1/2 error: Error running apply: exit status 1
2026-02-11T01:02:11.8403902Z         
2026-02-11T01:02:11.8407746Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698bd0c3ef616fcbf2cfb15e/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 698bd0c3ef616fcbf2cfb15e. Reason: Conflict. Params: [698bd0c3ef616fcbf2cfb15e], BadRequestDetail: 
2026-02-11T01:02:11.8410380Z         
2026-02-11T01:02:11.8411036Z           with mongodbatlas_network_container.test,
2026-02-11T01:02:11.8412331Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-11T01:02:11.8413835Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-11T01:02:11.8414443Z         
2026-02-11T01:02:11.8415205Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (0.55s)
```

- 2026-02-12
  - PASS 12 minutes
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6448535Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-12T18:47:25.6449650Z     resource_stream_connection_test.go:221: Creating execution project (1): test-acc-tf-p-1961865846174247976
2026-02-12T18:47:25.6450588Z     resource_stream_connection_test.go:221: 
2026-02-12T18:47:25.6452089Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6455031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6458117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6461042Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6464455Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:221
2026-02-12T18:47:25.6466526Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6467337Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6472098Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6474462Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-12T18:47:25.6478519Z         	Messages:   	Project creation failed: test-acc-tf-p-1961865846174247976, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6481119Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (0.24s)
```

- 2026-02-13 PASS 11 minutes
- 2026-02-14 PASS 9 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 12 minutes
- 2026-02-17 PASS 12 minutes
- 2026-02-18 PASS 14 minutes
- 2026-02-19 PASS 14 minutes
- 2026-02-20

### Error 2026-02-20T01:13:30+00:00
```
2026-02-20T01:13:30.1480308Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-20T01:13:30.1484583Z     resource_stream_connection_test.go:231: Error running post-test destroy, there may be dangling resources: stream connection (6997ac9a73841e1a88a61fad:test-acc-tf-s-7118788212088363119:kafka-conn-vpc) still exists
2026-02-20T01:13:30.1485510Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (816.58s)
```

- 2026-02-21

### Error 2026-02-21T01:11:08+00:00
```
2026-02-21T01:11:08.1340081Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-21T01:11:08.1344930Z     resource_stream_connection_test.go:231: Error running post-test destroy, there may be dangling resources: stream connection (6998fe2723648dd3abd556bc:test-acc-tf-s-1306484750196565097:kafka-conn-vpc) still exists
2026-02-21T01:11:08.1345926Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (606.64s)
```

- 2026-02-22: MISSING
- 2026-02-23

### Error 2026-02-23T01:12:31+00:00
```
2026-02-23T01:12:31.9019620Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-23T01:12:31.9025110Z     resource_stream_connection_test.go:231: Error running post-test destroy, there may be dangling resources: stream connection (699ba1b68decccf9757d2568:test-acc-tf-s-1844892050937574018:kafka-conn-vpc) still exists
2026-02-23T01:12:31.9027059Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (644.84s)
```

- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2005529Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-02-24T01:09:13.2017948Z   
2026-02-24T01:09:13.2018462Z     resource_stream_connection_test.go:231: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2018930Z         
2026-02-24T01:09:13.2019319Z         Error: error waiting for stream connection to be ready
2026-02-24T01:09:13.2019656Z         
2026-02-24T01:09:13.2020011Z           with mongodbatlas_stream_connection.test,
2026-02-24T01:09:13.2020881Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-02-24T01:09:13.2021734Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-24T01:09:13.2022082Z         
2026-02-24T01:09:13.2022565Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2022992Z         type
2026-02-24T01:09:13.2023346Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (865.41s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 2 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 3 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 15 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 8 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 16 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
