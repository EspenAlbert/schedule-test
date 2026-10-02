# stream/streamconnection/TestAccStreamRSStreamConnection_workspaceNameAliasMigration Test Details
# Found 37 TestRuns in dev, qa from 2026-09-03 to 2026-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-15 01:40](#error-2026-09-15t0140260000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections | dev | flaky_500 | 0.07s
[2026-09-16 01:37](#error-2026-09-16t0137530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections | dev |  | 0.04s
[2026-09-17 01:38](#error-2026-09-17t0138500000) | API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections | dev | unknown | 0.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03 PASS 7 seconds
- 2026-09-04 PASS 4 seconds
- 2026-09-05 PASS 6 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 6 seconds
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
2026-09-15T01:40:26.7117201Z === RUN   TestAccStreamRSStreamConnection_workspaceNameAliasMigration
2026-09-15T01:40:26.7141595Z    test_working_directory=/tmp/plugintest1957571094 test_step_number=1 test_name=TestAccStreamRSStreamConnection_workspaceNameAliasMigration test_terraform_path=/home/runner/work/_temp/8dac1edb-3c11-4d9a-ab9c-98e5162cfa5f/terraform
2026-09-15T01:40:26.7144143Z     resource_stream_connection_test.go:144: Step 1/3 error: Error running apply: exit status 1
2026-09-15T01:40:26.7145230Z         
2026-09-15T01:40:26.7145827Z         Error: error creating resource
2026-09-15T01:40:26.7146396Z         
2026-09-15T01:40:26.7147112Z           with mongodbatlas_stream_connection.test,
2026-09-15T01:40:26.7148731Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-09-15T01:40:26.7150058Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-15T01:40:26.7150717Z         
2026-09-15T01:40:26.7152233Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections
2026-09-15T01:40:26.7153869Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T01:40:26.7155137Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T01:40:26.7156459Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T01:40:26.7157570Z --- FAIL: TestAccStreamRSStreamConnection_workspaceNameAliasMigration (0.68s)
```

- 2026-09-16

### Error 2026-09-16T01:37:53+00:00
```
2026-09-16T01:37:53.6676235Z === RUN   TestAccStreamRSStreamConnection_workspaceNameAliasMigration
2026-09-16T01:37:53.6689763Z    test_terraform_path=/home/runner/work/_temp/8ee13637-549f-4c33-91e7-d08eae244697/terraform test_working_directory=/tmp/plugintest3624996485
2026-09-16T01:37:53.6690724Z     resource_stream_connection_test.go:144: Step 1/3 error: Error running apply: exit status 1
2026-09-16T01:37:53.6691209Z         
2026-09-16T01:37:53.6691540Z         Error: error creating resource
2026-09-16T01:37:53.6691857Z         
2026-09-16T01:37:53.6692255Z           with mongodbatlas_stream_connection.test,
2026-09-16T01:37:53.6692998Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-09-16T01:37:53.6693700Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-16T01:37:53.6694073Z         
2026-09-16T01:37:53.6694899Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections
2026-09-16T01:37:53.6696022Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T01:37:53.6696715Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T01:37:53.6697433Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T01:37:53.6698180Z --- FAIL: TestAccStreamRSStreamConnection_workspaceNameAliasMigration (0.43s)
```

- 2026-09-17

### Error 2026-09-17T01:38:50+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-09-17T01:38:50.255000+00:00-TestAccStreamRSStreamConnection_workspaceNameAliasMigration',confidence=1.0,ts_when='15 days ago')
API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections
```
2026-09-17T01:38:50.2551502Z === RUN   TestAccStreamRSStreamConnection_workspaceNameAliasMigration
2026-09-17T01:38:50.2565546Z   
2026-09-17T01:38:50.2566158Z     resource_stream_connection_test.go:144: Step 1/3 error: Error running apply: exit status 1
2026-09-17T01:38:50.2566736Z         
2026-09-17T01:38:50.2567062Z         Error: error creating resource
2026-09-17T01:38:50.2567384Z         
2026-09-17T01:38:50.2567766Z           with mongodbatlas_stream_connection.test,
2026-09-17T01:38:50.2568459Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-09-17T01:38:50.2569113Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-17T01:38:50.2569475Z         
2026-09-17T01:38:50.2570242Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab376bb7babdea2c8b8911/streams/test-acc-tf-s-7698987809372845664/connections
2026-09-17T01:38:50.2571234Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T01:38:50.2571890Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T01:38:50.2572570Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T01:38:50.2573175Z --- FAIL: TestAccStreamRSStreamConnection_workspaceNameAliasMigration (0.66s)
```

- 2026-09-18 PASS 4 seconds
- 2026-09-19 PASS 5 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 7 seconds
- 2026-09-22 PASS 5 seconds
- 2026-09-23 PASS 7 seconds
- 2026-09-24 PASS 6 seconds
- 2026-09-25 PASS 4 seconds
- 2026-09-26 PASS 5 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 6 seconds
- 2026-09-29
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2026-09-30
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2026-10-01 PASS 6 seconds
- 2026-10-02 PASS 6 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 4 seconds
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
- 2026-09-20 PASS 7 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 6 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 7 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
