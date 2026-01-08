# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-11 00:31](#error-2025-12-11t0031180000) |  | dev | timeout | 9420.08s
[2026-01-03 00:30](#error-2026-01-03t0030040000) |  | dev | timeout | 9324.03s
[2026-01-05 00:34](#error-2026-01-05t0034160000) |  | dev | timeout | 9443.09s
[2026-01-05 07:56](#error-2026-01-05t0756350000) |  | dev | timeout | 9343.01s
[2026-01-07 00:30](#error-2026-01-07t0030380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92dd59b8466ea71f9a4/clusters/test-acc-tf-c-7404559334205620123 | dev | flaky_500 | 214.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 51 minutes
  - PASS 47 minutes
- 2025-12-11

### Error 2025-12-11T00:31:18+00:00
```
2025-12-11T00:31:18.4562466Z === RUN   TestAccSearchDeployment_timeoutTest
2025-12-11T00:31:22.0221912Z === CONT  TestAccSearchDeployment_timeoutTest
2025-12-11T00:44:27.6583240Z   diagnostic_detail=
2025-12-11T00:44:27.6586775Z    tf_req_id=0f0648d3-ee5e-5055-5b4d-3ef1438b4f9d tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment
2025-12-11T01:06:17.6987146Z   diagnostic_detail=
2025-12-11T01:06:17.6990215Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_req_id=a42db6cb-0359-52b4-068b-a2b91eb6dd0d tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange
2025-12-11T03:05:18.2762210Z   diagnostic_detail=
2025-12-11T03:05:18.2765954Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_req_id=6772d0ee-e128-18ec-c37d-381d0b3d76da tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_resource_type=mongodbatlas_search_deployment
2025-12-11T03:05:18.2883534Z    test_terraform_path=/home/runner/work/_temp/a917c6bc-86c8-4422-a2c2-e029a2fa1eaf/terraform test_working_directory=/tmp/plugintest1861452039 test_step_number=3 test_name=TestAccSearchDeployment_timeoutTest
2025-12-11T03:05:18.2885161Z     resource_test.go:82: Step 3/6 error: Error running apply: exit status 1
2025-12-11T03:05:18.2886139Z         
2025-12-11T03:05:18.2886673Z         Error: error during search deployment creation
2025-12-11T03:05:18.2887117Z         
2025-12-11T03:05:18.2887448Z           with mongodbatlas_search_deployment.test,
2025-12-11T03:05:18.2888087Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2025-12-11T03:05:18.2888667Z           45: resource "mongodbatlas_search_deployment" "test" {
2025-12-11T03:05:18.2889074Z         
2025-12-11T03:05:18.2889658Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-12-11T03:05:18.2890071Z         timeout: 1h40m0s)
2025-12-11T03:05:18.2890553Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-12-11T03:05:18.2891165Z         transient error, wait before retrying to allow resource deletion to finish
2025-12-11T03:08:21.6213074Z --- FAIL: TestAccSearchDeployment_timeoutTest (9420.75s)
```

- 2025-12-12 PASS 52 minutes
- 2025-12-13 PASS 51 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 43 minutes
- 2025-12-16 PASS 47 minutes
- 2025-12-17 PASS 51 minutes
- 2025-12-18 PASS 52 minutes
- 2025-12-19 PASS 56 minutes
- 2025-12-20 PASS 48 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 51 minutes
- 2025-12-23 PASS 46 minutes
- 2025-12-24 PASS 53 minutes
- 2025-12-25 PASS an hour
- 2025-12-26 PASS 47 minutes
- 2025-12-27 PASS 45 minutes
- 2025-12-28: MISSING
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
  - FAIL 2 hours

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

  - FAIL 2 hours

### Error 2026-01-05T07:56:35+00:00
```
2026-01-05T07:56:35.2850663Z === RUN   TestAccSearchDeployment_timeoutTest
2026-01-05T07:56:36.4417369Z === CONT  TestAccSearchDeployment_timeoutTest
2026-01-05T10:29:45.4968888Z === NAME  TestAccSearchDeployment_timeoutTest
2026-01-05T10:29:45.4969656Z     resource_test.go:82: Step 3/6 error: Error running apply: exit status 1
2026-01-05T10:29:45.4970177Z         
2026-01-05T10:29:45.4970571Z         Error: error during search deployment creation
2026-01-05T10:29:45.4971131Z         
2026-01-05T10:29:45.4971588Z           with mongodbatlas_search_deployment.test,
2026-01-05T10:29:45.4972393Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2026-01-05T10:29:45.4973080Z           45: resource "mongodbatlas_search_deployment" "test" {
2026-01-05T10:29:45.4973439Z         
2026-01-05T10:29:45.4973891Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T10:29:45.4974310Z         timeout: 1h40m0s)
2026-01-05T10:29:45.4974802Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T10:29:45.4975460Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T10:32:18.3584673Z --- FAIL: TestAccSearchDeployment_timeoutTest (9343.07s)
```

- 2026-01-06 PASS 50 minutes
- 2026-01-07

### Error 2026-01-07T00:30:38+00:00
```
2026-01-07T00:30:38.9234105Z === RUN   TestAccSearchDeployment_timeoutTest
2026-01-07T00:30:39.8500647Z === CONT  TestAccSearchDeployment_timeoutTest
2026-01-07T00:34:13.2225830Z === NAME  TestAccSearchDeployment_timeoutTest
2026-01-07T00:34:13.2226495Z     resource_test.go:82: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-07T00:34:13.2226968Z         
2026-01-07T00:34:13.2227227Z         Error: Error in create
2026-01-07T00:34:13.2227720Z         
2026-01-07T00:34:13.2228058Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:34:13.2228704Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:34:13.2229303Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:34:13.2229609Z         
2026-01-07T00:34:13.2230061Z         cluster=test-acc-tf-c-7404559334205620123 didn't reach desired state: IDLE,
2026-01-07T00:34:13.2230462Z         error:
2026-01-07T00:34:13.2231188Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92dd59b8466ea71f9a4/clusters/test-acc-tf-c-7404559334205620123
2026-01-07T00:34:13.2231988Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:34:13.2232560Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:34:13.2232953Z         BadRequestDetail: 
2026-01-07T00:34:13.2684068Z --- FAIL: TestAccSearchDeployment_timeoutTest (214.34s)
```

- 2026-01-08 PASS 45 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 51 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 47 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 44 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 47 minutes
- 2026-01-05 PASS 41 minutes
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 46 minutes
