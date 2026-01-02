# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-04 00:30](#error-2025-12-04t0030300000) |  | dev | flaky_client | 4392.08s
[2025-12-11 00:31](#error-2025-12-11t0031180000) |  | dev | timeout | 9420.08s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04

### Error 2025-12-04T00:30:30+00:00
```
2025-12-04T00:30:30.9982673Z === RUN   TestAccSearchDeployment_timeoutTest
2025-12-04T00:30:34.0282819Z === CONT  TestAccSearchDeployment_timeoutTest
2025-12-04T00:44:12.2268279Z   diagnostic_detail=
2025-12-04T00:44:12.2273657Z    diagnostic_severity=ERROR tf_resource_type=mongodbatlas_search_deployment tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_req_id=2df5587d-2a53-5a90-8e7e-93bda95cf79f tf_proto_version=6.10 tf_rpc=ApplyResourceChange diagnostic_summary="error during search deployment creation"
2025-12-04T01:07:27.3297351Z   diagnostic_detail=
2025-12-04T01:07:27.3302287Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_req_id=f1bacd8a-f25e-a492-0c4f-3e5341922700 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2025-12-04T01:38:07.9915183Z === NAME  TestAccSearchDeployment_timeoutTest
2025-12-04T01:38:07.9916371Z     resource_test.go:82: Step 3/6 error: Error running apply: exit status 1
2025-12-04T01:38:07.9917021Z         
2025-12-04T01:38:07.9917868Z         Error: error during search deployment creation
2025-12-04T01:38:07.9918370Z         
2025-12-04T01:38:07.9918715Z           with mongodbatlas_search_deployment.test,
2025-12-04T01:38:07.9919402Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2025-12-04T01:38:07.9920236Z           45: resource "mongodbatlas_search_deployment" "test" {
2025-12-04T01:38:07.9920666Z         
2025-12-04T01:38:07.9920863Z         Get
2025-12-04T01:38:07.9921717Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6930d625f6043a6479893bd3/clusters/test-acc-tf-c-2591367958845840553/search/deployment":
2025-12-04T01:38:07.9922516Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-12-04T01:43:45.8789054Z --- FAIL: TestAccSearchDeployment_timeoutTest (4392.78s)
```

- 2025-12-05 PASS 2 hours
- 2025-12-06 PASS 50 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 44 minutes
- 2025-12-09 PASS 48 minutes
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

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 46 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 46 minutes
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
