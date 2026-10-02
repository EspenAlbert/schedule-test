# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-15 01:40](#error-2026-09-15t0140260000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections | dev |  | 0.07s
[2026-09-16 01:37](#error-2026-09-16t0137530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections | dev |  | 0.06s
[2026-09-17 01:38](#error-2026-09-17t0138500000) | API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections | dev | unknown | 0.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 5 seconds
- 2026-09-03 PASS 6 seconds
- 2026-09-04 PASS 4 seconds
- 2026-09-05 PASS 6 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 7 seconds
- 2026-09-08 PASS 5 seconds
- 2026-09-09 PASS 5 seconds
- 2026-09-10 PASS 5 seconds
- 2026-09-11
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-09-12 PASS 6 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 4 seconds
- 2026-09-15

### Error 2026-09-15T01:40:26+00:00
```
2026-09-15T01:40:26.7158763Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-09-15T01:40:26.7182664Z    test_name=TestAccStreamRSStreamConnection_kafkaOAuthBearer test_terraform_path=/home/runner/work/_temp/8dac1edb-3c11-4d9a-ab9c-98e5162cfa5f/terraform test_working_directory=/tmp/plugintest1338894217 test_step_number=1
2026-09-15T01:40:26.7184906Z     resource_stream_connection_test.go:226: Step 1/3 error: Error running apply: exit status 1
2026-09-15T01:40:26.7185756Z         
2026-09-15T01:40:26.7186304Z         Error: error creating resource
2026-09-15T01:40:26.7186827Z         
2026-09-15T01:40:26.7187505Z           with mongodbatlas_stream_connection.test,
2026-09-15T01:40:26.7188938Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-09-15T01:40:26.7190059Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-15T01:40:26.7190677Z         
2026-09-15T01:40:26.7192172Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections
2026-09-15T01:40:26.7194007Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T01:40:26.7195316Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T01:40:26.7196647Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T01:40:26.7197674Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (0.71s)
```

- 2026-09-16

### Error 2026-09-16T01:37:53+00:00
```
2026-09-16T01:37:53.6698741Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-09-16T01:37:53.6712646Z   
2026-09-16T01:37:53.6713176Z     resource_stream_connection_test.go:226: Step 1/3 error: Error running apply: exit status 1
2026-09-16T01:37:53.6713822Z         
2026-09-16T01:37:53.6714153Z         Error: error creating resource
2026-09-16T01:37:53.6714471Z         
2026-09-16T01:37:53.6714864Z           with mongodbatlas_stream_connection.test,
2026-09-16T01:37:53.6716005Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-09-16T01:37:53.6716707Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-16T01:37:53.6717085Z         
2026-09-16T01:37:53.6717903Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections
2026-09-16T01:37:53.6718789Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T01:37:53.6719482Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T01:37:53.6720199Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T01:37:53.6720776Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (0.57s)
```

- 2026-09-17

### Error 2026-09-17T01:38:50+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-09-17T01:38:50.257000+00:00-TestAccStreamRSStreamConnection_kafkaOAuthBearer',confidence=1.0,ts_when='15 days ago')
API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections
```
2026-09-17T01:38:50.2573744Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-09-17T01:38:50.2586673Z    test_working_directory=/tmp/plugintest2162204039
2026-09-17T01:38:50.2587284Z     resource_stream_connection_test.go:226: Step 1/3 error: Error running apply: exit status 1
2026-09-17T01:38:50.2587755Z         
2026-09-17T01:38:50.2588078Z         Error: error creating resource
2026-09-17T01:38:50.2588392Z         
2026-09-17T01:38:50.2588770Z           with mongodbatlas_stream_connection.test,
2026-09-17T01:38:50.2589450Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-09-17T01:38:50.2590097Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-17T01:38:50.2590459Z         
2026-09-17T01:38:50.2591410Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab376bb7babdea2c8b8911/streams/test-acc-tf-s-7698987809372845664/connections
2026-09-17T01:38:50.2592542Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T01:38:50.2593210Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T01:38:50.2593888Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T01:38:50.2594442Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (0.70s)
```

- 2026-09-18 PASS 5 seconds
- 2026-09-19 PASS 4 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 12 seconds
- 2026-09-22 PASS 6 seconds
- 2026-09-23 PASS 7 seconds
- 2026-09-24 PASS 6 seconds
- 2026-09-25 PASS 5 seconds
- 2026-09-26 PASS 5 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 7 seconds
- 2026-09-29
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2026-09-30
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
- 2026-10-01 PASS 6 seconds
- 2026-10-02 PASS 7 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 5 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 6 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 6 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 8 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 7 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 7 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
