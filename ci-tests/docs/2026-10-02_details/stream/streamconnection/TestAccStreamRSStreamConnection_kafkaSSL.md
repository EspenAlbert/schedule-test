# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 6)
Success rate: 84.21%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-08 04:29](#error-2026-09-08t0429240000) |  | dev | timeout | 2565.01s
[2026-09-15 01:40](#error-2026-09-15t0140260000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections | dev |  | 0.04s
[2026-09-16 01:37](#error-2026-09-16t0137530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections | dev |  | 0.04s
[2026-09-17 01:38](#error-2026-09-17t0138500000) | API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections | dev | unknown | 0.06s
[2026-09-30 03:54](#error-2026-09-30t0354310000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6abc5c13ab5a7e547db56a9b/streams/test-acc-tf-s-7746648072835992775/connections/kafka-conn-ssl | dev | flaky_500 | 387.10s
[2026-10-02 04:31](#error-2026-10-02t0431490000) |  | dev | timeout | 2567.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 15 minutes
- 2026-09-03 PASS 13 minutes
- 2026-09-04 PASS 16 minutes
- 2026-09-05 PASS 13 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 15 minutes
- 2026-09-08

### Error 2026-09-08T04:29:24+00:00
```
2026-09-08T04:29:24.6823949Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-09-08T04:29:24.6837501Z    test_working_directory=/tmp/plugintest3617601674 test_step_number=2
2026-09-08T04:29:24.6838790Z     resource_stream_connection_test.go:272: Step 2/3 error: Error running apply: exit status 1
2026-09-08T04:29:24.6839612Z         
2026-09-08T04:29:24.6840315Z         Error: error waiting for stream connection to be ready
2026-09-08T04:29:24.6840945Z         
2026-09-08T04:29:24.6841621Z           with mongodbatlas_stream_connection.test,
2026-09-08T04:29:24.6842604Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-08T04:29:24.6843327Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-08T04:29:24.6843716Z         
2026-09-08T04:29:24.6844233Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-09-08T04:29:24.6844748Z         'PENDING', timeout: 40m0s)
2026-09-08T04:29:24.6845438Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (2565.11s)
```

- 2026-09-09 PASS 14 minutes
- 2026-09-10 PASS 15 minutes
- 2026-09-11
  - PASS 14 minutes
  - PASS 13 minutes
- 2026-09-12 PASS 12 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 13 minutes
- 2026-09-15

### Error 2026-09-15T01:40:26+00:00
```
2026-09-15T01:40:26.7240064Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-09-15T01:40:26.7263967Z    test_name=TestAccStreamRSStreamConnection_kafkaSSL test_terraform_path=/home/runner/work/_temp/8dac1edb-3c11-4d9a-ab9c-98e5162cfa5f/terraform test_working_directory=/tmp/plugintest2534630147 test_step_number=1
2026-09-15T01:40:26.7266062Z     resource_stream_connection_test.go:272: Step 1/3 error: Error running apply: exit status 1
2026-09-15T01:40:26.7266927Z         
2026-09-15T01:40:26.7267505Z         Error: error creating resource
2026-09-15T01:40:26.7268062Z         
2026-09-15T01:40:26.7269418Z           with mongodbatlas_stream_connection.test,
2026-09-15T01:40:26.7270824Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-09-15T01:40:26.7272137Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-15T01:40:26.7272796Z         
2026-09-15T01:40:26.7274350Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections
2026-09-15T01:40:26.7276032Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T01:40:26.7277318Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T01:40:26.7278887Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T01:40:26.7279871Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (0.41s)
```

- 2026-09-16

### Error 2026-09-16T01:37:53+00:00
```
2026-09-16T01:37:53.6752764Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-09-16T01:37:53.6766501Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/8ee13637-549f-4c33-91e7-d08eae244697/terraform test_working_directory=/tmp/plugintest161449086
2026-09-16T01:37:53.6767521Z     resource_stream_connection_test.go:272: Step 1/3 error: Error running apply: exit status 1
2026-09-16T01:37:53.6768014Z         
2026-09-16T01:37:53.6768353Z         Error: error creating resource
2026-09-16T01:37:53.6768675Z         
2026-09-16T01:37:53.6769073Z           with mongodbatlas_stream_connection.test,
2026-09-16T01:37:53.6769835Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-09-16T01:37:53.6770551Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-16T01:37:53.6770934Z         
2026-09-16T01:37:53.6771771Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections
2026-09-16T01:37:53.6772662Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T01:37:53.6773365Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T01:37:53.6774094Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T01:37:53.6774642Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (0.44s)
```

- 2026-09-17

### Error 2026-09-17T01:38:50+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-09-17T01:38:50.262000+00:00-TestAccStreamRSStreamConnection_kafkaSSL',confidence=1.0,ts_when='15 days ago')
API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections
```
2026-09-17T01:38:50.2626851Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-09-17T01:38:50.2640384Z   
2026-09-17T01:38:50.2640956Z     resource_stream_connection_test.go:272: Step 1/3 error: Error running apply: exit status 1
2026-09-17T01:38:50.2641539Z         
2026-09-17T01:38:50.2641871Z         Error: error creating resource
2026-09-17T01:38:50.2642204Z         
2026-09-17T01:38:50.2642606Z           with mongodbatlas_stream_connection.test,
2026-09-17T01:38:50.2643312Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-09-17T01:38:50.2643992Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-17T01:38:50.2644367Z         
2026-09-17T01:38:50.2645137Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab376bb7babdea2c8b8911/streams/test-acc-tf-s-7698987809372845664/connections
2026-09-17T01:38:50.2645973Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T01:38:50.2646648Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T01:38:50.2647331Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T01:38:50.2647857Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (0.59s)
```

- 2026-09-18 PASS 14 minutes
- 2026-09-19 PASS 13 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 14 minutes
- 2026-09-22 PASS 13 minutes
- 2026-09-23 PASS 15 minutes
- 2026-09-24 PASS 14 minutes
- 2026-09-25 PASS 14 minutes
- 2026-09-26 PASS 14 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 13 minutes
- 2026-09-29
  - PASS 12 minutes
  - PASS 15 minutes
  - PASS 16 minutes
- 2026-09-30
  - FAIL 6 minutes

### Error 2026-09-30T03:54:31+00:00
```
2026-09-30T03:54:31.9899042Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-09-30T03:54:31.9912902Z   
2026-09-30T03:54:31.9913478Z     resource_stream_connection_test.go:272: Step 2/3 error: Error running apply: exit status 1
2026-09-30T03:54:31.9913976Z         
2026-09-30T03:54:31.9914408Z         Error: error waiting for stream connection to be ready
2026-09-30T03:54:31.9914788Z         
2026-09-30T03:54:31.9915189Z           with mongodbatlas_stream_connection.test,
2026-09-30T03:54:31.9916141Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-30T03:54:31.9916848Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-30T03:54:31.9917224Z         
2026-09-30T03:54:31.9918145Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abc5c13ab5a7e547db56a9b/streams/test-acc-tf-s-7746648072835992775/connections/kafka-conn-ssl
2026-09-30T03:54:31.9919118Z         GET: HTTP 401 Unauthorized (Error code: "UNEXPECTED_ERROR") Detail: You are
2026-09-30T03:54:31.9919816Z         not authorized for this resource. Reason: Unauthorized. Params: [],
2026-09-30T03:54:31.9920299Z         BadRequestDetail: 
2026-09-30T03:54:31.9920692Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (387.96s)
```

  - PASS 13 minutes
  - PASS 14 minutes
- 2026-10-01 PASS 13 minutes
- 2026-10-02

### Error 2026-10-02T04:31:49+00:00
```
2026-10-02T04:31:49.7470258Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-10-02T04:31:49.7481927Z    test_working_directory=/tmp/plugintest2446029129 test_step_number=2 test_name=TestAccStreamRSStreamConnection_kafkaSSL test_terraform_path=/home/runner/work/_temp/338da8e4-4146-4b35-b3c4-c007a3ac0763/terraform
2026-10-02T04:31:49.7483386Z     resource_stream_connection_test.go:272: Step 2/3 error: Error running apply: exit status 1
2026-10-02T04:31:49.7483959Z         
2026-10-02T04:31:49.7484471Z         Error: error waiting for stream connection to be ready
2026-10-02T04:31:49.7484921Z         
2026-10-02T04:31:49.7485376Z           with mongodbatlas_stream_connection.test,
2026-10-02T04:31:49.7486268Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-10-02T04:31:49.7487236Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-10-02T04:31:49.7487716Z         
2026-10-02T04:31:49.7488468Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-10-02T04:31:49.7489068Z         'PENDING', timeout: 40m0s)
2026-10-02T04:31:49.7489547Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (2567.65s)
```


## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 14 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 14 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 13 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 12 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 13 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 13 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
