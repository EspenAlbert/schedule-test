# stream/streaminstance/TestAccStreamDSStreamInstances_basic Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 45) FAIL(x 2)
Success rate: 95.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:45](#error-2025-09-14t0045380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c43d444485797b214ef/streams | qa | flaky_500 | 30.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams | qa | flaky_500 | 31.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 2 seconds
- 2025-09-04 PASS 2 seconds
- 2025-09-05 PASS 3 seconds
- 2025-09-06 PASS 2 seconds
- 2025-09-07 PASS 32 seconds
- 2025-09-08
  - PASS 2 seconds
  - PASS 55 seconds
  - PASS 2 seconds
- 2025-09-09 PASS 2 seconds
- 2025-09-10 PASS 2 seconds
- 2025-09-11 PASS 2 seconds
- 2025-09-12
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-09-13 PASS 3 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8062565Z === RUN   TestAccStreamDSStreamInstances_basic
2025-09-14T00:45:38.8067075Z === CONT  TestAccStreamDSStreamInstances_basic
2025-09-14T00:45:38.8116081Z === NAME  TestAccStreamDSStreamInstances_basic
2025-09-14T00:45:38.8116705Z     data_source_stream_instances_test.go:26: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:45:38.8117236Z         
2025-09-14T00:45:38.8117512Z         Error: error creating resource
2025-09-14T00:45:38.8117882Z         
2025-09-14T00:45:38.8118338Z           with mongodbatlas_stream_instance.test,
2025-09-14T00:45:38.8119090Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-09-14T00:45:38.8119803Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-14T00:45:38.8120114Z         
2025-09-14T00:45:38.8120719Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ef/streams
2025-09-14T00:45:38.8121509Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:45:38.8122207Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:45:38.8122809Z         BadRequestDetail: 
2025-09-14T00:45:38.8134669Z    test_name=TestAccStreamDSStreamInstance_basic test_terraform_path=/home/runner/work/_temp/4e309555-d1ed-43c4-85d0-4622947e7d4a/terraform test_working_directory=/tmp/plugintest3187435514 test_step_number=1
2025-09-14T00:45:38.8159963Z --- FAIL: TestAccStreamDSStreamInstances_basic (30.87s)
```

- 2025-09-15
  - PASS 2 seconds
  - PASS 3 seconds
  - FAIL 31 seconds

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0271239Z === RUN   TestAccStreamDSStreamInstances_basic
2025-09-15T06:36:28.0277071Z === CONT  TestAccStreamDSStreamInstances_basic
2025-09-15T06:36:28.0288476Z   
2025-09-15T06:36:28.0306354Z === NAME  TestAccStreamDSStreamInstances_basic
2025-09-15T06:36:28.0306920Z     data_source_stream_instances_test.go:26: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:36:28.0307477Z         
2025-09-15T06:36:28.0307761Z         Error: error creating resource
2025-09-15T06:36:28.0308033Z         
2025-09-15T06:36:28.0308419Z           with mongodbatlas_stream_instance.test,
2025-09-15T06:36:28.0309064Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-09-15T06:36:28.0309650Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-15T06:36:28.0309962Z         
2025-09-15T06:36:28.0310470Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams
2025-09-15T06:36:28.0311164Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:36:28.0311749Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:36:28.0312141Z         BadRequestDetail: 
2025-09-15T06:36:28.0327454Z   
2025-09-15T06:36:28.0363742Z --- FAIL: TestAccStreamDSStreamInstances_basic (31.06s)
```

- 2025-09-16 PASS 2 seconds
- 2025-09-17 PASS 2 seconds
- 2025-09-18 PASS 2 seconds
- 2025-09-19 PASS 2 seconds
- 2025-09-20 PASS 2 seconds
- 2025-09-21 PASS 2 seconds
- 2025-09-22 PASS 3 seconds
- 2025-09-23 PASS 2 seconds
- 2025-09-24 PASS 2 seconds
- 2025-09-25 PASS 2 seconds
- 2025-09-26 PASS 2 seconds
- 2025-09-27 PASS 3 seconds
- 2025-09-28 PASS 2 seconds
- 2025-09-29
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-09-30
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-10-01
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-10-02 PASS 2 seconds