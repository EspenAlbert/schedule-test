# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 5) FAIL(x 2)
Success rate: 71.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-03 00:30](#error-2026-01-03t0030020000) |  | dev | timeout | 11501.07s
[2026-01-05 00:34](#error-2026-01-05t0034160000) |  | dev | timeout | 11556.08s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30 PASS 36 minutes
- 2025-12-31 PASS 41 minutes
- 2026-01-01 PASS 33 minutes
- 2026-01-02 PASS 40 minutes
- 2026-01-03

### Error 2026-01-03T00:30:02+00:00
```
2026-01-03T00:30:02.1118464Z === RUN   TestAccSearchDeployment_basic
2026-01-03T00:30:05.9697803Z === CONT  TestAccSearchDeployment_basic
2026-01-03T03:39:42.4189846Z === NAME  TestAccSearchDeployment_basic
2026-01-03T03:39:42.4190495Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-01-03T03:39:42.4191096Z         
2026-01-03T03:39:42.4191519Z         Error: error during search deployment creation
2026-01-03T03:39:42.4192001Z         
2026-01-03T03:39:42.4192329Z           with mongodbatlas_search_deployment.test,
2026-01-03T03:39:42.4192957Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2026-01-03T03:39:42.4193548Z           45: 		resource "mongodbatlas_search_deployment" "test" {
2026-01-03T03:39:42.4193859Z         
2026-01-03T03:39:42.4194285Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-03T03:39:42.4194688Z         timeout: 3h0m0s)
2026-01-03T03:39:42.4195155Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-03T03:39:42.4196007Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-03T03:41:44.9067397Z --- FAIL: TestAccSearchDeployment_basic (11501.67s)
```

- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T00:34:16+00:00
```
2026-01-05T00:34:16.3790397Z === RUN   TestAccSearchDeployment_basic
2026-01-05T00:34:17.4537645Z === CONT  TestAccSearchDeployment_basic
2026-01-05T00:46:51.8726028Z   diagnostic_detail=
2026-01-05T00:46:51.8730299Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_proto_version=6.10 tf_req_id=d1fa41ba-68e6-0261-ee1b-c4efcc6506d9 tf_resource_type=mongodbatlas_search_deployment tf_rpc=ApplyResourceChange tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-01-05T01:08:49.6972831Z   diagnostic_detail=
2026-01-05T01:08:49.6976618Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_req_id=8a4ae722-8c40-d252-6639-dd4420200fd1 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-01-05T03:09:07.8576142Z   diagnostic_detail=
2026-01-05T03:09:07.8578953Z   
2026-01-05T03:43:51.3884954Z === NAME  TestAccSearchDeployment_basic
2026-01-05T03:43:51.3886004Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2026-01-05T03:43:51.3886568Z         
2026-01-05T03:43:51.3887009Z         Error: error during search deployment creation
2026-01-05T03:43:51.3887312Z         
2026-01-05T03:43:51.3887766Z           with mongodbatlas_search_deployment.test,
2026-01-05T03:43:51.3888677Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2026-01-05T03:43:51.3889787Z           45: 		resource "mongodbatlas_search_deployment" "test" {
2026-01-05T03:43:51.3890119Z         
2026-01-05T03:43:51.3890564Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-01-05T03:43:51.3890972Z         timeout: 3h0m0s)
2026-01-05T03:43:51.3891614Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-01-05T03:43:51.3892260Z         transient error, wait before retrying to allow resource deletion to finish
2026-01-05T03:43:53.3739259Z    test_terraform_path=/home/runner/work/_temp/d4f9d5e4-d779-44ce-9ae8-7290dd7e3311/terraform test_working_directory=/tmp/plugintest2363990512 test_name=TestMigSearchDeployment_basic
2026-01-05T03:46:54.2269870Z --- FAIL: TestAccSearchDeployment_basic (11556.77s)
```


## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 34 minutes
- 2026-01-05: MISSING
