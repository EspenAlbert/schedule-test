# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 19) FAIL(x 15)
Success rate: 55.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-26 00:54](#error-2026-01-26t0054520000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6976b6a7674654a76203f610/streams/test-acc-tf-s-4909020578380833250/connections/kafka-conn-ssl | dev |  | 9.00s
[2026-01-31 01:39](#error-2026-01-31t0139390000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/697d4e477d00588dcf9f3779/streams/test-acc-tf-s-2471065621833068665/connections/kafka-conn-ssl | dev |  | 9.01s
[2026-02-02 03:39](#error-2026-02-02t0339100000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/697ff21371768356d7f886bc/containers | dev |  | 5.03s
[2026-02-03 00:40](#error-2026-02-03t0040330000) | NO_CAPACITY /api/atlas/v2/groups/698143c3b2e54ee99590a04a/containers | dev |  | 10.01s
[2026-02-03 01:51](#error-2026-02-03t0151060000) | NO_CAPACITY /api/atlas/v2/groups/6981544b8303bfa55c8217d3/containers | dev | flaky_500 | 9.02s
[2026-02-04 00:54](#error-2026-02-04t0054310000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6982945d09271d271f2f72fe/containers | dev |  | 6.02s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6983e6a1304923ebd185884b/containers | dev |  | 5.06s
[2026-02-06 00:56](#error-2026-02-06t0056070000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6985378713125e9acd9899c4/containers | dev |  | 6.00s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6986890dde0bdc0de28a2cba/containers | dev |  | 5.03s
[2026-02-07 03:05](#error-2026-02-07t0305490000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6986a7302145b0fd44859309/containers | dev |  | 6.03s
[2026-02-09 01:02](#error-2026-02-09t0102430000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/69892ce16faf4f440e809673/containers | dev |  | 6.06s
[2026-02-10 01:07](#error-2026-02-10t0107550000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/698a7f73fa1d9fd1d77b962e/containers | dev |  | 5.04s
[2026-02-11 01:02](#error-2026-02-11t0102110000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/698bd0c3ef616fcbf2cfb15e/containers | dev |  | 7.03s
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 4.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26

### Error 2026-01-26T00:54:52+00:00
```
2026-01-26T00:54:52.3314127Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-01-26T00:54:52.3323905Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-01-26T00:54:52.3355213Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-01-26T00:54:52.3355829Z     resource_stream_connection_test.go:262: Step 1/3 error: Error running apply: exit status 1
2026-01-26T00:54:52.3356284Z         
2026-01-26T00:54:52.3356573Z         Error: error fetching resource
2026-01-26T00:54:52.3356860Z         
2026-01-26T00:54:52.3357245Z           with data.mongodbatlas_stream_connection.test,
2026-01-26T00:54:52.3358071Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2026-01-26T00:54:52.3358694Z           39: data "mongodbatlas_stream_connection" "test" {
2026-01-26T00:54:52.3359009Z         
2026-01-26T00:54:52.3359872Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6976b6a7674654a76203f610/streams/test-acc-tf-s-4909020578380833250/connections/kafka-conn-ssl
2026-01-26T00:54:52.3360799Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-26T00:54:52.3361412Z         Detail: Stream connection with name kafka-conn-ssl for project
2026-01-26T00:54:52.3362025Z         6976b6a7674654a76203f610 and name test-acc-tf-s-4909020578380833250 not
2026-01-26T00:54:52.3362670Z         found. Reason: Not Found. Params: [kafka-conn-ssl 6976b6a7674654a76203f610
2026-01-26T00:54:52.3363416Z         test-acc-tf-s-4909020578380833250], BadRequestDetail: 
2026-01-26T00:54:52.3364481Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (9.03s)
```

- 2026-01-27 PASS 3 minutes
- 2026-01-28 PASS 4 minutes
- 2026-01-29 PASS 2 minutes
- 2026-01-30: MISSING
- 2026-01-31

### Error 2026-01-31T01:39:39+00:00
```
2026-01-31T01:39:39.8765768Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-01-31T01:39:39.8790259Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-01-31T01:39:39.8820298Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-01-31T01:39:39.8820916Z     resource_stream_connection_test.go:262: Step 1/3 error: Error running apply: exit status 1
2026-01-31T01:39:39.8821381Z         
2026-01-31T01:39:39.8821674Z         Error: error fetching resource
2026-01-31T01:39:39.8822189Z         
2026-01-31T01:39:39.8822569Z           with data.mongodbatlas_stream_connection.test,
2026-01-31T01:39:39.8823254Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2026-01-31T01:39:39.8823882Z           39: data "mongodbatlas_stream_connection" "test" {
2026-01-31T01:39:39.8824217Z         
2026-01-31T01:39:39.8825107Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e477d00588dcf9f3779/streams/test-acc-tf-s-2471065621833068665/connections/kafka-conn-ssl
2026-01-31T01:39:39.8826036Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-31T01:39:39.8826661Z         Detail: Stream connection with name kafka-conn-ssl for project
2026-01-31T01:39:39.8827423Z         697d4e477d00588dcf9f3779 and name test-acc-tf-s-2471065621833068665 not
2026-01-31T01:39:39.8828092Z         found. Reason: Not Found. Params: [kafka-conn-ssl 697d4e477d00588dcf9f3779
2026-01-31T01:39:39.8828668Z         test-acc-tf-s-2471065621833068665], BadRequestDetail: 
2026-01-31T01:39:39.8829102Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (9.07s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:10+00:00
```
2026-02-02T03:39:10.8537859Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-02T03:39:10.8558268Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-02T03:39:10.8581124Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-02T03:39:10.8581817Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-02T03:39:10.8582351Z         
2026-02-02T03:39:10.8584029Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff21371768356d7f886bc/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 697ff21371768356d7f886bc. Reason: Conflict. Params: [697ff21371768356d7f886bc], BadRequestDetail: 
2026-02-02T03:39:10.8585284Z         
2026-02-02T03:39:10.8585620Z           with mongodbatlas_network_container.test,
2026-02-02T03:39:10.8586243Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-02T03:39:10.8586839Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-02T03:39:10.8587154Z         
2026-02-02T03:39:10.8587440Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.33s)
```

- 2026-02-03
  - FAIL 10 seconds

### Error 2026-02-03T00:40:33+00:00
```
2026-02-03T00:40:33.6402141Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-03T00:40:33.6448555Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-03T00:40:33.6470149Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-03T00:40:33.6470910Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:40:33.6471490Z         
2026-02-03T00:40:33.6473455Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c3b2e54ee99590a04a/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 698143c3b2e54ee99590a04a. Reason: Conflict. Params: [AWS 698143c3b2e54ee99590a04a], BadRequestDetail: 
2026-02-03T00:40:33.6474945Z         
2026-02-03T00:40:33.6475293Z           with mongodbatlas_network_container.test,
2026-02-03T00:40:33.6475977Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-03T00:40:33.6476620Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-03T00:40:33.6476950Z         
2026-02-03T00:40:33.6478277Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (10.14s)
```

  - FAIL 9 seconds

### Error 2026-02-03T01:51:06+00:00
```
2026-02-03T01:51:06.0451078Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-03T01:51:06.0500353Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-03T01:51:06.0543576Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-03T01:51:06.0544957Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T01:51:06.0545978Z         
2026-02-03T01:51:06.0549598Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6981544b8303bfa55c8217d3/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 6981544b8303bfa55c8217d3. Reason: Conflict. Params: [AWS 6981544b8303bfa55c8217d3], BadRequestDetail: 
2026-02-03T01:51:06.0552144Z         
2026-02-03T01:51:06.0552759Z           with mongodbatlas_network_container.test,
2026-02-03T01:51:06.0554028Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-03T01:51:06.0555187Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-03T01:51:06.0555775Z         
2026-02-03T01:51:06.0556262Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (9.22s)
```

- 2026-02-04

### Error 2026-02-04T00:54:31+00:00
```
2026-02-04T00:54:31.1385586Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-04T00:54:31.1394691Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-04T00:54:31.1417755Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-04T00:54:31.1418452Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-04T00:54:31.1418983Z         
2026-02-04T00:54:31.1420666Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945d09271d271f2f72fe/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6982945d09271d271f2f72fe. Reason: Conflict. Params: [6982945d09271d271f2f72fe], BadRequestDetail: 
2026-02-04T00:54:31.1421864Z         
2026-02-04T00:54:31.1422201Z           with mongodbatlas_network_container.test,
2026-02-04T00:54:31.1422823Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-04T00:54:31.1423439Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-04T00:54:31.1423765Z         
2026-02-04T00:54:31.1425487Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (6.16s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0609446Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-05T01:04:40.0623315Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-05T01:04:40.0647569Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-05T01:04:40.0648347Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-05T01:04:40.0648921Z         
2026-02-05T01:04:40.0650872Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a1304923ebd185884b/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6983e6a1304923ebd185884b. Reason: Conflict. Params: [6983e6a1304923ebd185884b], BadRequestDetail: 
2026-02-05T01:04:40.0652236Z         
2026-02-05T01:04:40.0652591Z           with mongodbatlas_network_container.test,
2026-02-05T01:04:40.0653864Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-05T01:04:40.0654559Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-05T01:04:40.0654900Z         
2026-02-05T01:04:40.0656103Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.64s)
```

- 2026-02-06

### Error 2026-02-06T00:56:07+00:00
```
2026-02-06T00:56:07.9007369Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-06T00:56:07.9016802Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-06T00:56:07.9042132Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-06T00:56:07.9042896Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-06T00:56:07.9043466Z         
2026-02-06T00:56:07.9045381Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd9899c4/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6985378713125e9acd9899c4. Reason: Conflict. Params: [6985378713125e9acd9899c4], BadRequestDetail: 
2026-02-06T00:56:07.9046708Z         
2026-02-06T00:56:07.9047051Z           with mongodbatlas_network_container.test,
2026-02-06T00:56:07.9047734Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-06T00:56:07.9048628Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-06T00:56:07.9065153Z         
2026-02-06T00:56:07.9066610Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (6.04s)
```

- 2026-02-07
  - FAIL 5 seconds

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6080663Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T00:56:32.6100102Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T00:56:32.6124757Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T00:56:32.6125519Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-07T00:56:32.6126094Z         
2026-02-07T00:56:32.6127993Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890dde0bdc0de28a2cba/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6986890dde0bdc0de28a2cba. Reason: Conflict. Params: [6986890dde0bdc0de28a2cba], BadRequestDetail: 
2026-02-07T00:56:32.6129339Z         
2026-02-07T00:56:32.6129690Z           with mongodbatlas_network_container.test,
2026-02-07T00:56:32.6130372Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-07T00:56:32.6131025Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-07T00:56:32.6131355Z         
2026-02-07T00:56:32.6131644Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.29s)
```

  - FAIL 6 seconds

### Error 2026-02-07T03:05:49+00:00
```
2026-02-07T03:05:49.8321148Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T03:05:49.8334957Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T03:05:49.8366200Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T03:05:49.8366993Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-07T03:05:49.8367588Z         
2026-02-07T03:05:49.8369584Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986a7302145b0fd44859309/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6986a7302145b0fd44859309. Reason: Conflict. Params: [6986a7302145b0fd44859309], BadRequestDetail: 
2026-02-07T03:05:49.8370953Z         
2026-02-07T03:05:49.8371313Z           with mongodbatlas_network_container.test,
2026-02-07T03:05:49.8372030Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-07T03:05:49.8372701Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-07T03:05:49.8373032Z         
2026-02-07T03:05:49.8373770Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (6.25s)
```

- 2026-02-08: MISSING
- 2026-02-09

### Error 2026-02-09T01:02:43+00:00
```
2026-02-09T01:02:43.7119717Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-09T01:02:43.7138917Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-09T01:02:43.7182320Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-09T01:02:43.7183647Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-09T01:02:43.7184658Z         
2026-02-09T01:02:43.7188081Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69892ce16faf4f440e809673/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 69892ce16faf4f440e809673. Reason: Conflict. Params: [69892ce16faf4f440e809673], BadRequestDetail: 
2026-02-09T01:02:43.7190590Z         
2026-02-09T01:02:43.7191193Z           with mongodbatlas_network_container.test,
2026-02-09T01:02:43.7192394Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-09T01:02:43.7193532Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-09T01:02:43.7194106Z         
2026-02-09T01:02:43.7196870Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (6.59s)
```

- 2026-02-10

### Error 2026-02-10T01:07:55+00:00
```
2026-02-10T01:07:55.4796396Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-10T01:07:55.4822128Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-10T01:07:55.4862478Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-10T01:07:55.4863892Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-10T01:07:55.4865182Z         
2026-02-10T01:07:55.4868732Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698a7f73fa1d9fd1d77b962e/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 698a7f73fa1d9fd1d77b962e. Reason: Conflict. Params: [698a7f73fa1d9fd1d77b962e], BadRequestDetail: 
2026-02-10T01:07:55.4871162Z         
2026-02-10T01:07:55.4871805Z           with mongodbatlas_network_container.test,
2026-02-10T01:07:55.4873069Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-10T01:07:55.4874280Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-10T01:07:55.4875186Z         
2026-02-10T01:07:55.4875754Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.44s)
```

- 2026-02-11

### Error 2026-02-11T01:02:11+00:00
```
2026-02-11T01:02:11.8416041Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-11T01:02:11.8433824Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-11T01:02:11.8481416Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-11T01:02:11.8482862Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-11T01:02:11.8483912Z         
2026-02-11T01:02:11.8488270Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698bd0c3ef616fcbf2cfb15e/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 698bd0c3ef616fcbf2cfb15e. Reason: Conflict. Params: [698bd0c3ef616fcbf2cfb15e], BadRequestDetail: 
2026-02-11T01:02:11.8490795Z         
2026-02-11T01:02:11.8491419Z           with mongodbatlas_network_container.test,
2026-02-11T01:02:11.8492655Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-11T01:02:11.8493838Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-11T01:02:11.8494420Z         
2026-02-11T01:02:11.8496352Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (7.33s)
```

- 2026-02-12
  - PASS 2 minutes
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6481818Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-12T18:47:25.6482888Z     resource_stream_connection_test.go:253: Creating execution project (1): test-acc-tf-p-8546980246753402558
2026-02-12T18:47:25.6483820Z     resource_stream_connection_test.go:253: 
2026-02-12T18:47:25.6485322Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6488365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6491484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6494428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6498144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:253
2026-02-12T18:47:25.6500231Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6501034Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6505580Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6508045Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2026-02-12T18:47:25.6511867Z         	Messages:   	Project creation failed: test-acc-tf-p-8546980246753402558, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6514393Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (0.24s)
```

- 2026-02-13 PASS 3 minutes
- 2026-02-14 PASS 2 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 2 minutes
- 2026-02-17 PASS 2 minutes
- 2026-02-18 PASS 2 minutes
- 2026-02-19 PASS 2 minutes
- 2026-02-20 PASS 3 minutes
- 2026-02-21 PASS 2 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 minutes
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2023808Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-24T01:09:13.2037766Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-24T01:09:13.2190884Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-24T01:09:13.2192039Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-24T01:09:13.2193220Z         
2026-02-24T01:09:13.2194050Z         Error: error creating MongoDB Network Peering Container: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:09:13.2194663Z         
2026-02-24T01:09:13.2195017Z           with mongodbatlas_network_container.test,
2026-02-24T01:09:13.2195713Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-24T01:09:13.2196363Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-24T01:09:13.2196699Z         
2026-02-24T01:09:13.2197392Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (4.54s)
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
- 2026-02-01 PASS 4 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 4 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 4 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 2 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 2 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 2 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
