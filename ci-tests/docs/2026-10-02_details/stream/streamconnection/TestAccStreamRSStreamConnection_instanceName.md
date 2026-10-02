# stream/streamconnection/TestAccStreamRSStreamConnection_instanceName Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-15 01:40](#error-2026-09-15t0140260000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections | dev |  | 0.04s
[2026-09-16 01:37](#error-2026-09-16t0137530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections | dev |  | 0.04s
[2026-09-17 01:38](#error-2026-09-17t0138500000) | VALIDATION_ERROR /api/atlas/v2/groups/6aab376bb7babdea2c8b8911/streams/test-acc-tf-s-7698987809372845664/connections | dev | flaky_500 | 0.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 2 seconds
- 2026-09-03 PASS 2 seconds
- 2026-09-04 PASS 2 seconds
- 2026-09-05 PASS 2 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 9 seconds
- 2026-09-08 PASS 2 seconds
- 2026-09-09 PASS 3 seconds
- 2026-09-10 PASS 2 seconds
- 2026-09-11
  - PASS 2 seconds
  - PASS 2 seconds
- 2026-09-12 PASS 2 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 4 seconds
- 2026-09-15

### Error 2026-09-15T01:40:26+00:00
```
2026-09-15T01:40:26.7326986Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-09-15T01:40:26.7340799Z    test_name=TestAccStreamRSStreamConnection_instanceName test_terraform_path=/home/runner/work/_temp/8dac1edb-3c11-4d9a-ab9c-98e5162cfa5f/terraform
2026-09-15T01:40:26.7341802Z     resource_stream_connection_test.go:722: Step 1/2 error: Error running apply: exit status 1
2026-09-15T01:40:26.7342288Z         
2026-09-15T01:40:26.7342609Z         Error: error creating resource
2026-09-15T01:40:26.7342926Z         
2026-09-15T01:40:26.7343312Z           with mongodbatlas_stream_connection.test,
2026-09-15T01:40:26.7344066Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-09-15T01:40:26.7344782Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-15T01:40:26.7345158Z         
2026-09-15T01:40:26.7345985Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections
2026-09-15T01:40:26.7346883Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T01:40:26.7347703Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T01:40:26.7348670Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T01:40:26.7349273Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (0.40s)
```

- 2026-09-16

### Error 2026-09-16T01:37:53+00:00
```
2026-09-16T01:37:53.6812132Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-09-16T01:37:53.6827098Z   
2026-09-16T01:37:53.6827635Z     resource_stream_connection_test.go:722: Step 1/2 error: Error running apply: exit status 1
2026-09-16T01:37:53.6828136Z         
2026-09-16T01:37:53.6828474Z         Error: error creating resource
2026-09-16T01:37:53.6828798Z         
2026-09-16T01:37:53.6829193Z           with mongodbatlas_stream_connection.test,
2026-09-16T01:37:53.6829943Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-09-16T01:37:53.6830813Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-16T01:37:53.6831194Z         
2026-09-16T01:37:53.6832041Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections
2026-09-16T01:37:53.6832941Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T01:37:53.6833648Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T01:37:53.6834377Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T01:37:53.6834943Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (0.40s)
```

- 2026-09-17

### Error 2026-09-17T01:38:50+00:00
```
2026-09-17T01:38:50.2683500Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-09-17T01:38:50.2696550Z   
2026-09-17T01:38:50.2697235Z     resource_stream_connection_test.go:722: Step 1/2 error: Error running apply: exit status 1
2026-09-17T01:38:50.2698005Z         
2026-09-17T01:38:50.2698330Z         Error: error creating resource
2026-09-17T01:38:50.2698644Z         
2026-09-17T01:38:50.2699022Z           with mongodbatlas_stream_connection.test,
2026-09-17T01:38:50.2699708Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-09-17T01:38:50.2700369Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-17T01:38:50.2700731Z         
2026-09-17T01:38:50.2701601Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab376bb7babdea2c8b8911/streams/test-acc-tf-s-7698987809372845664/connections
2026-09-17T01:38:50.2702431Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T01:38:50.2703188Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T01:38:50.2703864Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T01:38:50.2704416Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (0.50s)
```

- 2026-09-18 PASS 2 seconds
- 2026-09-19 PASS 2 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 3 seconds
- 2026-09-22 PASS 2 seconds
- 2026-09-23 PASS 3 seconds
- 2026-09-24 PASS 2 seconds
- 2026-09-25 PASS 2 seconds
- 2026-09-26 PASS 2 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 3 seconds
- 2026-09-29
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
- 2026-09-30
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
- 2026-10-01 PASS 2 seconds
- 2026-10-02 PASS 2 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 2 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 2 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 2 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 3 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 2 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 3 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
