# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
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
- 2025-09-05 PASS 2 seconds
- 2025-09-06 PASS 2 seconds
- 2025-09-07 PASS 2 seconds
- 2025-09-08
  - PASS 2 seconds
  - PASS 55 seconds
  - PASS 2 seconds
- 2025-09-09 PASS 2 seconds
- 2025-09-10 PASS 2 seconds
- 2025-09-11 PASS 2 seconds
- 2025-09-12
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-09-13 PASS 3 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8063255Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-09-14T00:45:38.8066726Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-09-14T00:45:38.8083129Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-09-14T00:45:38.8083698Z     data_source_stream_instances_test.go:50: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:45:38.8084117Z         
2025-09-14T00:45:38.8084395Z         Error: error creating resource
2025-09-14T00:45:38.8084714Z         
2025-09-14T00:45:38.8085034Z           with mongodbatlas_stream_instance.test,
2025-09-14T00:45:38.8085654Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-09-14T00:45:38.8086227Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-14T00:45:38.8086526Z         
2025-09-14T00:45:38.8087022Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ef/streams
2025-09-14T00:45:38.8087686Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:45:38.8088363Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:45:38.8088750Z         BadRequestDetail: 
2025-09-14T00:45:38.8095685Z    test_terraform_path=/home/runner/work/_temp/4e309555-d1ed-43c4-85d0-4622947e7d4a/terraform test_working_directory=/tmp/plugintest3615625363 test_name=TestAccStreamRSStreamInstance_withStreamConfig
2025-09-14T00:45:38.8146694Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (30.87s)
```

- 2025-09-15
  - PASS 2 seconds
  - PASS 3 seconds
  - FAIL 31 seconds

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0271953Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-09-15T06:36:28.0275955Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-09-15T06:36:28.0327720Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-09-15T06:36:28.0328310Z     data_source_stream_instances_test.go:50: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:36:28.0328732Z         
2025-09-15T06:36:28.0329016Z         Error: error creating resource
2025-09-15T06:36:28.0329422Z         
2025-09-15T06:36:28.0329758Z           with mongodbatlas_stream_instance.test,
2025-09-15T06:36:28.0330396Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-09-15T06:36:28.0330985Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-15T06:36:28.0331402Z         
2025-09-15T06:36:28.0331905Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams
2025-09-15T06:36:28.0332586Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:36:28.0333167Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:36:28.0333562Z         BadRequestDetail: 
2025-09-15T06:36:28.0339640Z    test_working_directory=/tmp/plugintest1529079730 test_step_number=1 test_name=TestAccStreamRSStreamInstance_basic test_terraform_path=/home/runner/work/_temp/3cb86fb6-c69c-49a7-873f-7dee73528b05/terraform
2025-09-15T06:36:28.0364166Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (31.07s)
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
- 2025-09-27 PASS 2 seconds
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