# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) TIMEOUT
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028130000) |  | dev | timeout | 17994.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 54 minutes
- 2025-10-30

### Error 2025-10-30T00:28:13+00:00
```
2025-10-30T00:28:13.2379581Z === RUN   TestAccSearchDeployment_timeoutTest
2025-10-30T00:28:16.6883400Z === CONT  TestAccSearchDeployment_timeoutTest
2025-10-30T00:39:22.5602547Z   diagnostic_detail=
2025-10-30T00:39:22.5605446Z    diagnostic_severity=ERROR
2025-10-30T00:51:09.3580516Z   diagnostic_detail=
2025-10-30T00:51:09.3586127Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2025-10-30T02:51:31.0032393Z   diagnostic_detail=
2025-10-30T02:51:31.0036818Z   
2025-10-30T02:51:31.0109023Z     resource_test.go:82: Step 3/6 error: Error running apply: exit status 1
2025-10-30T02:51:31.0109805Z         
2025-10-30T02:51:31.0110244Z         Error: error during search deployment creation
2025-10-30T02:51:31.0110598Z         
2025-10-30T02:51:31.0111131Z           with mongodbatlas_search_deployment.test,
2025-10-30T02:51:31.0111997Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2025-10-30T02:51:31.0112881Z           45: resource "mongodbatlas_search_deployment" "test" {
2025-10-30T02:51:31.0113212Z         
2025-10-30T02:51:31.0113654Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-10-30T02:51:31.0114280Z         timeout: 1h40m0s)
2025-10-30T02:51:31.0114974Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-10-30T02:51:31.0115614Z         transient error, wait before retrying to allow resource deletion to finish
2025-10-30T03:37:52.5392211Z   diagnostic_detail=
2025-10-30T03:37:52.5399076Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_req_id=360deace-8877-38fa-4d86-11a21adfd7eb tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment
2025-10-30T03:37:52.5462818Z    test_name=TestAccSearchDeployment_basic
2025-10-30T05:28:10.5335056Z 		TestAccSearchDeployment_basic (4h59m54s)
2025-10-30T05:28:10.5335884Z 		TestAccSearchDeployment_multiRegion (4h59m54s)
2025-10-30T05:28:10.5336719Z 		TestAccSearchDeployment_timeoutTest (4h59m54s)
```

- 2025-10-31 PASS 57 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 45 minutes
- 2025-11-04 PASS 52 minutes
- 2025-11-05
  - PASS 59 minutes
  - PASS 48 minutes
- 2025-11-06 PASS 59 minutes
- 2025-11-07 PASS 54 minutes
- 2025-11-08 PASS an hour
- 2025-11-09: MISSING
- 2025-11-10 PASS 46 minutes
- 2025-11-11 PASS 48 minutes
- 2025-11-12 PASS 50 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS 55 minutes
- 2025-11-15 PASS 42 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 51 minutes
- 2025-11-18 PASS 47 minutes
- 2025-11-19 PASS 45 minutes
- 2025-11-20 PASS an hour
- 2025-11-21 PASS 41 minutes
- 2025-11-22 PASS 42 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 45 minutes
- 2025-11-25 PASS 46 minutes
- 2025-11-26 PASS 42 minutes
- 2025-11-27 PASS an hour

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 48 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 47 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 49 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 50 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 48 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
