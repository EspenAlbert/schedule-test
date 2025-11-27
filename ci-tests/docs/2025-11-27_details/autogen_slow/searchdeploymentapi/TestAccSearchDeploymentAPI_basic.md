# autogen_slow/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 05:29](#error-2025-10-30t0529410000) |  | dev | timeout | 15102.09s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 45 minutes
- 2025-10-30

### Error 2025-10-30T05:29:41+00:00
```
2025-10-30T05:29:41.7799235Z === RUN   TestAccSearchDeploymentAPI_basic
2025-10-30T05:29:41.7799878Z === CONT  TestAccSearchDeploymentAPI_basic
2025-10-30T05:29:41.7800685Z   diagnostic_detail=
2025-10-30T05:29:41.7803579Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment_api tf_req_id=e8229711-2419-11b8-a82d-6b841c843fee diagnostic_severity=ERROR diagnostic_summary="Error waiting for changes in Create"
2025-10-30T05:29:41.7810886Z    test_working_directory=/tmp/plugintest2705491660 test_name=TestAccSearchDeploymentAPI_basic
2025-10-30T05:29:41.7811521Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-10-30T05:29:41.7811887Z         
2025-10-30T05:29:41.7812203Z         Error: Error waiting for changes in Create
2025-10-30T05:29:41.7812506Z         
2025-10-30T05:29:41.7812861Z           with mongodbatlas_search_deployment_api.test,
2025-10-30T05:29:41.7813532Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2025-10-30T05:29:41.7814169Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2025-10-30T05:29:41.7814829Z         
2025-10-30T05:29:41.7815271Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-10-30T05:29:41.7815695Z         timeout: 1h0m0s)
2025-10-30T05:29:41.7816190Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-10-30T05:29:41.7816821Z         transient error, wait before retrying to allow resource deletion to finish
2025-10-30T05:29:41.7825375Z   
2025-10-30T05:29:41.7825846Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T05:29:41.7826282Z         
2025-10-30T05:29:41.7826537Z         Error: Error in delete
2025-10-30T05:29:41.7826796Z         
2025-10-30T05:29:41.7827211Z         cluster=test-acc-tf-c-7830231576889010693 didn't reach desired state:
2025-10-30T05:29:41.7827818Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T05:29:41.7828285Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T05:29:41.7828633Z --- FAIL: TestAccSearchDeploymentAPI_basic (15102.88s)
```

- 2025-10-31 PASS 43 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 34 minutes
- 2025-11-04 PASS 48 minutes
- 2025-11-05
  - PASS 45 minutes
  - PASS 37 minutes
- 2025-11-06 PASS 55 minutes
- 2025-11-07 PASS 44 minutes
- 2025-11-08 PASS an hour
- 2025-11-09: MISSING
- 2025-11-10 PASS 34 minutes
- 2025-11-11 PASS 35 minutes
- 2025-11-12 PASS 37 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS 44 minutes
- 2025-11-15 PASS 36 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 41 minutes
- 2025-11-18 PASS 39 minutes
- 2025-11-19 PASS 36 minutes
- 2025-11-20 PASS 57 minutes
- 2025-11-21 PASS 35 minutes
- 2025-11-22 PASS 35 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 36 minutes
- 2025-11-25 PASS 40 minutes
- 2025-11-26 PASS 31 minutes
- 2025-11-27 PASS an hour

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 38 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 36 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 36 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 38 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 37 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
