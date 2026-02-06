# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 24) FAIL(x 10)
Success rate: 70.59%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-14 00:54](#error-2026-01-14t0054230000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6966e432dec294f0362b8167/streams/test-acc-tf-s-2275521615037241628/connections/kafka-conn-ssl | dev |  | 3.01s
[2026-01-24 00:54](#error-2026-01-24t0054100000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/697412d9757b552f68cd2407/streams/test-acc-tf-s-5340879531031091915/connections/kafka-conn-ssl | dev |  | 10.03s
[2026-01-26 00:54](#error-2026-01-26t0054520000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6976b6a7674654a76203f610/streams/test-acc-tf-s-4909020578380833250/connections/kafka-conn-ssl | dev |  | 9.00s
[2026-01-31 01:39](#error-2026-01-31t0139390000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/697d4e477d00588dcf9f3779/streams/test-acc-tf-s-2471065621833068665/connections/kafka-conn-ssl | dev |  | 9.01s
[2026-02-02 03:39](#error-2026-02-02t0339100000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/697ff21371768356d7f886bc/containers | dev |  | 5.03s
[2026-02-03 00:40](#error-2026-02-03t0040330000) | NO_CAPACITY /api/atlas/v2/groups/698143c3b2e54ee99590a04a/containers | dev |  | 10.01s
[2026-02-03 01:51](#error-2026-02-03t0151060000) | NO_CAPACITY /api/atlas/v2/groups/6981544b8303bfa55c8217d3/containers | dev | flaky_500 | 9.02s
[2026-02-04 00:54](#error-2026-02-04t0054310000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6982945d09271d271f2f72fe/containers | dev |  | 6.02s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6983e6a1304923ebd185884b/containers | dev |  | 5.06s
[2026-02-06 00:56](#error-2026-02-06t0056070000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6985378713125e9acd9899c4/containers | dev |  | 6.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09 PASS 4 minutes
- 2026-01-10 PASS 2 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 4 minutes
- 2026-01-13 PASS 3 minutes
- 2026-01-14

### Error 2026-01-14T00:54:23+00:00
```
2026-01-14T00:54:23.5908846Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-01-14T00:54:23.5925096Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-01-14T00:54:23.5971852Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-01-14T00:54:23.5972961Z     resource_stream_connection_test.go:261: Step 1/3 error: Error running apply: exit status 1
2026-01-14T00:54:23.5973789Z         
2026-01-14T00:54:23.5974301Z         Error: error fetching resource
2026-01-14T00:54:23.5974812Z         
2026-01-14T00:54:23.5975488Z           with data.mongodbatlas_stream_connection.test,
2026-01-14T00:54:23.5976758Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2026-01-14T00:54:23.5978070Z           39: data "mongodbatlas_stream_connection" "test" {
2026-01-14T00:54:23.5978656Z         
2026-01-14T00:54:23.5980230Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6966e432dec294f0362b8167/streams/test-acc-tf-s-2275521615037241628/connections/kafka-conn-ssl
2026-01-14T00:54:23.5981914Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-14T00:54:23.5983037Z         Detail: Stream connection with name kafka-conn-ssl for project
2026-01-14T00:54:23.5984186Z         6966e432dec294f0362b8167 and name test-acc-tf-s-2275521615037241628 not
2026-01-14T00:54:23.5985385Z         found. Reason: Not Found. Params: [kafka-conn-ssl 6966e432dec294f0362b8167
2026-01-14T00:54:23.5986409Z         test-acc-tf-s-2275521615037241628], BadRequestDetail: 
2026-01-14T00:54:23.5987177Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (3.13s)
```

- 2026-01-15 PASS 3 minutes
- 2026-01-16 PASS 4 minutes
- 2026-01-17 PASS 2 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 minutes
- 2026-01-20 PASS 2 minutes
- 2026-01-21 PASS 4 minutes
- 2026-01-22 PASS 2 minutes
- 2026-01-23 PASS 4 minutes
- 2026-01-24

### Error 2026-01-24T00:54:10+00:00
```
2026-01-24T00:54:10.7653623Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-01-24T00:54:10.7679482Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-01-24T00:54:10.7752210Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-01-24T00:54:10.7753324Z     resource_stream_connection_test.go:262: Step 1/3 error: Error running apply: exit status 1
2026-01-24T00:54:10.7754163Z         
2026-01-24T00:54:10.7754685Z         Error: error fetching resource
2026-01-24T00:54:10.7755204Z         
2026-01-24T00:54:10.7755888Z           with data.mongodbatlas_stream_connection.test,
2026-01-24T00:54:10.7757150Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2026-01-24T00:54:10.7758280Z           39: data "mongodbatlas_stream_connection" "test" {
2026-01-24T00:54:10.7758856Z         
2026-01-24T00:54:10.7760302Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697412d9757b552f68cd2407/streams/test-acc-tf-s-5340879531031091915/connections/kafka-conn-ssl
2026-01-24T00:54:10.7761984Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-01-24T00:54:10.7763081Z         Detail: Stream connection with name kafka-conn-ssl for project
2026-01-24T00:54:10.7764160Z         697412d9757b552f68cd2407 and name test-acc-tf-s-5340879531031091915 not
2026-01-24T00:54:10.7765308Z         found. Reason: Not Found. Params: [kafka-conn-ssl 697412d9757b552f68cd2407
2026-01-24T00:54:10.7766291Z         test-acc-tf-s-5340879531031091915], BadRequestDetail: 
2026-01-24T00:54:10.7767025Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (10.33s)
```

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


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 5 minutes
  - PASS 2 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 5 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 4 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 2 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 5 minutes
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
