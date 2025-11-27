# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) TIMEOUT
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 17994.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 44 minutes
- 2025-10-30

### Error 2025-10-30T00:28:10+00:00
```
2025-10-30T00:28:10.5249970Z === RUN   TestAccSearchDeployment_basic
2025-10-30T00:28:16.6878917Z === CONT  TestAccSearchDeployment_basic
2025-10-30T03:37:52.5463349Z === NAME  TestAccSearchDeployment_basic
2025-10-30T03:37:52.5465772Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2025-10-30T03:37:52.5466344Z         
2025-10-30T03:37:52.5466911Z         Error: error during search deployment creation
2025-10-30T03:37:52.5467391Z         
2025-10-30T03:37:52.5467926Z           with mongodbatlas_search_deployment.test,
2025-10-30T03:37:52.5469012Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2025-10-30T03:37:52.5469962Z           45: 		resource "mongodbatlas_search_deployment" "test" {
2025-10-30T03:37:52.5470385Z         
2025-10-30T03:37:52.5470831Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-10-30T03:37:52.5471260Z         timeout: 3h0m0s)
2025-10-30T03:37:52.5471747Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-10-30T03:37:52.5472370Z         transient error, wait before retrying to allow resource deletion to finish
2025-10-30T03:39:23.3986328Z   diagnostic_detail=
2025-10-30T03:39:23.3990267Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_req_id=d23f0d93-6973-22ce-b634-5cba5a9c1364 tf_resource_type=mongodbatlas_search_deployment
2025-10-30T03:39:23.4044080Z   
2025-10-30T05:28:10.5333505Z panic: test timed out after 5h0m0s
2025-10-30T05:28:10.5334240Z 	running tests:
2025-10-30T05:28:10.5335056Z 		TestAccSearchDeployment_basic (4h59m54s)
```

- 2025-10-31 PASS 41 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 39 minutes
- 2025-11-04 PASS 43 minutes
- 2025-11-05
  - PASS 51 minutes
  - PASS 37 minutes
- 2025-11-06 PASS an hour
- 2025-11-07 PASS 44 minutes
- 2025-11-08 PASS an hour
- 2025-11-09: MISSING
- 2025-11-10 PASS 34 minutes
- 2025-11-11 PASS 34 minutes
- 2025-11-12 PASS 39 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS 43 minutes
- 2025-11-15 PASS 35 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 41 minutes
- 2025-11-18 PASS 37 minutes
- 2025-11-19 PASS 35 minutes
- 2025-11-20 PASS 52 minutes
- 2025-11-21 PASS 34 minutes
- 2025-11-22 PASS 42 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 35 minutes
- 2025-11-25 PASS 42 minutes
- 2025-11-26 PASS 31 minutes
- 2025-11-27 PASS an hour

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 37 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 34 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 37 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 37 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 39 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
