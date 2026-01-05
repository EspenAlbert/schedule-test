# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 5) FAIL(x 2)
Success rate: 71.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-03 00:30](#error-2026-01-03t0030040000) |  | dev | timeout | 9324.03s
[2026-01-05 00:34](#error-2026-01-05t0034160000) |  | dev | timeout | 9443.09s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30 PASS 47 minutes
- 2025-12-31 PASS 51 minutes
- 2026-01-01 PASS 44 minutes
- 2026-01-02 PASS 52 minutes
- 2026-01-03

### Error 2026-01-03T00:30:04+00:00
```
2026-01-03T00:30:04.8428373Z === RUN   TestAccSearchDeployment_timeoutTest
2026-01-03T00:30:05.9701712Z === CONT  TestAccSearchDeployment_timeoutTest
2026-01-03T00:40:42.5565271Z   diagnostic_detail=
2026-01-03T00:40:42.5568994Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_resource_type=mongodbatlas_search_deployment tf_req_id=b5929eaa-f568-b9d0-729e-793d344ff3b8 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ApplyResourceChange
2026-01-03T01:02:32.9818303Z   diagnostic_detail=
2026-01-03T01:02:32.9821157Z    diagnostic_severity=ERROR
2026-01-03T03:02:55.9797500Z   diagnostic_detail=
2026-01-03T03:02:55.9800944Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10
2026-01-03T03:02:55.9888446Z    test_terraform_path=/home/runner/work/_temp/f687b38a-0579-4e2e-97d5-e86b9d1d1576/terraform test_working_directory=/tmp/plugintest3850711066 test_step_number=3 test_name=TestAccSearchDeployment_timeoutTest
2026-01-03T03:02:55.9890279Z     resource_test.go:82: Step 3/6 error: Error running apply: exit status 1
2026-01-03T03:02:55.9890880Z         
2026-01-03T03:02:55.9891277Z         Error: error during search deployment creation
2026-01-03T03:02:55.9891845Z         
2026-01-03T03:02:55.9892216Z           with mongodbatlas_search_deployment.test,
2026-01-03T03:02:55.9892979Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2026-01-03T03:02:55.9893688Z           45: resource "mongodbatlas_search_deployment" "test" {
2026-01-03T03:02:55.9894009Z         
2026-01-03T03:02:55.9894629Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-03T03:02:55.9895043Z         timeout: 1h40m0s)
2026-01-03T03:02:55.9895519Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-03T03:02:55.9896140Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-03T03:05:29.1234149Z --- FAIL: TestAccSearchDeployment_timeoutTest (9324.28s)
```

- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T00:34:16+00:00
```
2026-01-05T00:34:16.3791490Z === RUN   TestAccSearchDeployment_timeoutTest
2026-01-05T00:34:17.4521615Z === CONT  TestAccSearchDeployment_timeoutTest
2026-01-05T03:09:07.8673252Z === NAME  TestAccSearchDeployment_timeoutTest
2026-01-05T03:09:07.8673920Z     resource_test.go:82: Step 3/6 error: Error running apply: exit status 1
2026-01-05T03:09:07.8674375Z         
2026-01-05T03:09:07.8674714Z         Error: error during search deployment creation
2026-01-05T03:09:07.8675089Z         
2026-01-05T03:09:07.8675503Z           with mongodbatlas_search_deployment.test,
2026-01-05T03:09:07.8676351Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2026-01-05T03:09:07.8676959Z           45: resource "mongodbatlas_search_deployment" "test" {
2026-01-05T03:09:07.8677271Z         
2026-01-05T03:09:07.8677712Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T03:09:07.8678135Z         timeout: 1h40m0s)
2026-01-05T03:09:07.8678618Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T03:09:07.8679258Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T03:11:40.2587727Z --- FAIL: TestAccSearchDeployment_timeoutTest (9443.88s)
```


## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 47 minutes
- 2026-01-05: MISSING
