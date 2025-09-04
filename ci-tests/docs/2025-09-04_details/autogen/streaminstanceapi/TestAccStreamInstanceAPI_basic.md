# autogen/streaminstanceapi/TestAccStreamInstanceAPI_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 14:45](#error-2025-08-20t1445580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d542f98188003c99ea4b/streams | qa | flaky_500 | 32.08s
[2025-08-31 01:15](#error-2025-08-31t0115400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397ff7e07f9709daf0cc1/streams/test-acc-tf-1864920617908263904 | qa | flaky_500 | 58.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 13 seconds
- 2025-08-07 PASS 18 seconds
- 2025-08-08 PASS 4 seconds
- 2025-08-09 PASS 6 seconds
- 2025-08-10 PASS 12 seconds
- 2025-08-11 PASS 4 seconds
- 2025-08-12 PASS 5 seconds
- 2025-08-13 PASS 5 seconds
- 2025-08-14 PASS 4 seconds
- 2025-08-15 PASS 3 seconds
- 2025-08-16 PASS 5 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18 PASS 3 seconds
- 2025-08-19 PASS 4 seconds
- 2025-08-20
  - PASS 3 seconds
  - FAIL 32 seconds

### Error 2025-08-20T14:45:58+00:00
```
2025-08-20T14:45:58.7101292Z === RUN   TestAccStreamInstanceAPI_basic
2025-08-20T14:45:58.7102257Z     resource_test.go:21: Creating execution project: test-acc-tf-p-2026909609828168797
2025-08-20T14:45:58.7103522Z === CONT  TestAccStreamInstanceAPI_basic
2025-08-20T14:45:58.7120618Z    test_name=TestAccStreamInstanceAPI_basic test_terraform_path=/home/runner/work/_temp/6349f47c-380f-4b12-93a4-2362783d8776/terraform test_working_directory=/tmp/plugintest311136975 test_step_number=1
2025-08-20T14:45:58.7122261Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-08-20T14:45:58.7122859Z         
2025-08-20T14:45:58.7123329Z         Error: Error calling API in Create
2025-08-20T14:45:58.7123773Z         
2025-08-20T14:45:58.7124332Z           with mongodbatlas_stream_instance_api.test,
2025-08-20T14:45:58.7125463Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance_api" "test":
2025-08-20T14:45:58.7126520Z           12: 		resource "mongodbatlas_stream_instance_api" "test" {
2025-08-20T14:45:58.7127038Z         
2025-08-20T14:45:58.7127886Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d542f98188003c99ea4b/streams
2025-08-20T14:45:58.7129069Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:45:58.7130252Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:45:58.7130930Z         BadRequestDetail: 
2025-08-20T14:45:58.7131422Z --- FAIL: TestAccStreamInstanceAPI_basic (32.77s)
```

- 2025-08-21 PASS 3 seconds
- 2025-08-22 PASS 4 seconds
- 2025-08-23 PASS 4 seconds
- 2025-08-24 PASS 3 seconds
- 2025-08-25 PASS 4 seconds
- 2025-08-26 PASS 3 seconds
- 2025-08-27 PASS 4 seconds
- 2025-08-28 PASS 3 seconds
- 2025-08-29 PASS 4 seconds
- 2025-08-30 PASS 3 seconds
- 2025-08-31

### Error 2025-08-31T01:15:40+00:00
```
2025-08-31T01:15:40.1109636Z === RUN   TestAccStreamInstanceAPI_basic
2025-08-31T01:15:40.1112658Z     resource_test.go:21: Creating execution project: test-acc-tf-p-3729407083767028791
2025-08-31T01:15:40.1114014Z === CONT  TestAccStreamInstanceAPI_basic
2025-08-31T01:15:40.1131099Z    test_step_number=2 test_working_directory=/tmp/plugintest1467692951 test_name=TestAccStreamInstanceAPI_basic test_terraform_path=/home/runner/work/_temp/e778e919-ec06-4455-82f6-91ea36dcb1c8/terraform
2025-08-31T01:15:40.1133195Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-31T01:15:40.1134002Z         
2025-08-31T01:15:40.1134504Z         Error: Error calling API in Delete
2025-08-31T01:15:40.1134974Z         
2025-08-31T01:15:40.1136200Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397ff7e07f9709daf0cc1/streams/test-acc-tf-1864920617908263904
2025-08-31T01:15:40.1138066Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-08-31T01:15:40.1139313Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:15:40.1140060Z         BadRequestDetail: 
2025-08-31T01:15:40.1140566Z --- FAIL: TestAccStreamInstanceAPI_basic (58.24s)
```

- 2025-09-01
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 5 seconds
- 2025-09-02 PASS 5 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 5 seconds