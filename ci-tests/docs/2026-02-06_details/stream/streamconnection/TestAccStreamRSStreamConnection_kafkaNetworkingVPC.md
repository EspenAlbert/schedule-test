# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-02 03:39](#error-2026-02-02t0339100000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/697ff21371768356d7f886bc/containers | dev | 0.07s
[2026-02-03 00:40](#error-2026-02-03t0040330000) | NO_CAPACITY /api/atlas/v2/groups/698143c3b2e54ee99590a04a/containers | dev | 1.05s
[2026-02-03 01:51](#error-2026-02-03t0151060000) | NO_CAPACITY /api/atlas/v2/groups/6981544b8303bfa55c8217d3/containers | dev | 1.07s
[2026-02-04 00:54](#error-2026-02-04t0054310000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6982945d09271d271f2f72fe/containers | dev | 0.05s
[2026-02-06 00:56](#error-2026-02-06t0056070000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6985378713125e9acd9899c4/containers | dev | 0.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09 PASS 3 minutes
- 2026-01-10 PASS 3 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 3 minutes
- 2026-01-13 PASS 3 minutes
- 2026-01-14 PASS 3 minutes
- 2026-01-15 PASS 4 minutes
- 2026-01-16 PASS 3 minutes
- 2026-01-17 PASS 3 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 minutes
- 2026-01-20 PASS 4 minutes
- 2026-01-21 PASS 3 minutes
- 2026-01-22 PASS 5 minutes
- 2026-01-23 PASS 3 minutes
- 2026-01-24 PASS 4 minutes
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


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 2 minutes
  - PASS 3 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 3 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 3 minutes
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
