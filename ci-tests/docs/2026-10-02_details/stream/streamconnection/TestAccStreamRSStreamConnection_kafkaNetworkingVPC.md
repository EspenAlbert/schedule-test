# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 6)
Success rate: 84.21%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-08 04:29](#error-2026-09-08t0429240000) |  | dev | timeout | 2572.03s
[2026-09-15 01:40](#error-2026-09-15t0140260000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections | dev |  | 171.08s
[2026-09-16 01:37](#error-2026-09-16t0137530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections | dev |  | 182.00s
[2026-09-17 01:38](#error-2026-09-17t0138500000) | API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections | dev | unknown | 172.06s
[2026-09-30 03:54](#error-2026-09-30t0354310000) |  | dev | timeout | 2563.08s
[2026-10-02 04:31](#error-2026-10-02t0431490000) |  | dev | timeout | 2563.06s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 15 minutes
- 2026-09-03 PASS 17 minutes
- 2026-09-04 PASS 17 minutes
- 2026-09-05 PASS 14 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 15 minutes
- 2026-09-08

### Error 2026-09-08T04:29:24+00:00
```
2026-09-08T04:29:24.6801296Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-09-08T04:29:24.6815713Z   
2026-09-08T04:29:24.6816625Z     resource_stream_connection_test.go:241: Step 1/2 error: Error running apply: exit status 1
2026-09-08T04:29:24.6817458Z         
2026-09-08T04:29:24.6818164Z         Error: error waiting for stream connection to be ready
2026-09-08T04:29:24.6818766Z         
2026-09-08T04:29:24.6819392Z           with mongodbatlas_stream_connection.test,
2026-09-08T04:29:24.6820640Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-08T04:29:24.6821578Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-08T04:29:24.6821969Z         
2026-09-08T04:29:24.6822479Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-09-08T04:29:24.6822991Z         'PENDING', timeout: 40m0s)
2026-09-08T04:29:24.6823441Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (2572.31s)
```

- 2026-09-09 PASS 14 minutes
- 2026-09-10 PASS 13 minutes
- 2026-09-11
  - PASS 36 minutes
  - PASS 15 minutes
- 2026-09-12 PASS 13 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 15 minutes
- 2026-09-15

### Error 2026-09-15T01:40:26+00:00
```
2026-09-15T01:40:26.7198789Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-09-15T01:40:26.7223275Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/8dac1edb-3c11-4d9a-ab9c-98e5162cfa5f/terraform test_working_directory=/tmp/plugintest3988438359 test_step_number=1
2026-09-15T01:40:26.7225757Z     resource_stream_connection_test.go:241: Step 1/2 error: Error running apply: exit status 1
2026-09-15T01:40:26.7226662Z         
2026-09-15T01:40:26.7227241Z         Error: error creating resource
2026-09-15T01:40:26.7227797Z         
2026-09-15T01:40:26.7228723Z           with mongodbatlas_stream_connection.test,
2026-09-15T01:40:26.7230133Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-15T01:40:26.7231389Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-15T01:40:26.7232048Z         
2026-09-15T01:40:26.7233590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections
2026-09-15T01:40:26.7235275Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T01:40:26.7236579Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T01:40:26.7237916Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T01:40:26.7239170Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (171.82s)
```

- 2026-09-16

### Error 2026-09-16T01:37:53+00:00
```
2026-09-16T01:37:53.6721283Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-09-16T01:37:53.6743916Z   
2026-09-16T01:37:53.6744487Z     resource_stream_connection_test.go:241: Step 1/2 error: Error running apply: exit status 1
2026-09-16T01:37:53.6745018Z         
2026-09-16T01:37:53.6745567Z         Error: error creating resource
2026-09-16T01:37:53.6745914Z         
2026-09-16T01:37:53.6746318Z           with mongodbatlas_stream_connection.test,
2026-09-16T01:37:53.6747092Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-16T01:37:53.6747833Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-16T01:37:53.6748216Z         
2026-09-16T01:37:53.6749056Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections
2026-09-16T01:37:53.6750245Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T01:37:53.6750948Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T01:37:53.6751677Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T01:37:53.6752265Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (182.01s)
```

- 2026-09-17

### Error 2026-09-17T01:38:50+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-09-17T01:38:50.259000+00:00-TestAccStreamRSStreamConnection_kafkaNetworkingVPC',confidence=1.0,ts_when='15 days ago')
API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections
```
2026-09-17T01:38:50.2594959Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-09-17T01:38:50.2618890Z   
2026-09-17T01:38:50.2619423Z     resource_stream_connection_test.go:241: Step 1/2 error: Error running apply: exit status 1
2026-09-17T01:38:50.2619903Z         
2026-09-17T01:38:50.2620241Z         Error: error creating resource
2026-09-17T01:38:50.2620565Z         
2026-09-17T01:38:50.2621074Z           with mongodbatlas_stream_connection.test,
2026-09-17T01:38:50.2621783Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-17T01:38:50.2622454Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-17T01:38:50.2622834Z         
2026-09-17T01:38:50.2623607Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab376bb7babdea2c8b8911/streams/test-acc-tf-s-7698987809372845664/connections
2026-09-17T01:38:50.2624446Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T01:38:50.2625106Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T01:38:50.2625793Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T01:38:50.2626357Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (172.60s)
```

- 2026-09-18 PASS 15 minutes
- 2026-09-19 PASS 13 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 13 minutes
- 2026-09-22 PASS 15 minutes
- 2026-09-23 PASS 14 minutes
- 2026-09-24 PASS 14 minutes
- 2026-09-25 PASS 12 minutes
- 2026-09-26 PASS 13 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 14 minutes
- 2026-09-29
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 16 minutes
- 2026-09-30
  - FAIL 42 minutes

### Error 2026-09-30T03:54:31+00:00
```
2026-09-30T03:54:31.9880184Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-09-30T03:54:31.9892353Z   
2026-09-30T03:54:31.9892986Z     resource_stream_connection_test.go:241: Step 1/2 error: Error running apply: exit status 1
2026-09-30T03:54:31.9893496Z         
2026-09-30T03:54:31.9893918Z         Error: error waiting for stream connection to be ready
2026-09-30T03:54:31.9894300Z         
2026-09-30T03:54:31.9894753Z           with mongodbatlas_stream_connection.test,
2026-09-30T03:54:31.9895495Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-30T03:54:31.9896469Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-30T03:54:31.9896860Z         
2026-09-30T03:54:31.9897361Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-09-30T03:54:31.9898088Z         'PENDING', timeout: 40m0s)
2026-09-30T03:54:31.9898539Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (2563.78s)
```

  - PASS 13 minutes
  - PASS 14 minutes
- 2026-10-01 PASS 13 minutes
- 2026-10-02

### Error 2026-10-02T04:31:49+00:00
```
2026-10-02T04:31:49.7449784Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-10-02T04:31:49.7462243Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-10-02T04:31:49.7463311Z     resource_stream_connection_test.go:241: Step 1/2 error: Error running apply: exit status 1
2026-10-02T04:31:49.7463913Z         
2026-10-02T04:31:49.7464428Z         Error: error waiting for stream connection to be ready
2026-10-02T04:31:49.7464878Z         
2026-10-02T04:31:49.7465373Z           with mongodbatlas_stream_connection.test,
2026-10-02T04:31:49.7466355Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-10-02T04:31:49.7467201Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-10-02T04:31:49.7467649Z         
2026-10-02T04:31:49.7468248Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-10-02T04:31:49.7469121Z         'PENDING', timeout: 40m0s)
2026-10-02T04:31:49.7469658Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (2563.57s)
```


## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 13 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 14 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 14 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 15 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 14 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 13 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
