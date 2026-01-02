# autogen_slow/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-11 01:46](#error-2025-12-11t0146060000) |  | dev | timeout | 4392.06s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS an hour
- 2025-12-05 PASS 2 hours
- 2025-12-06 PASS 41 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 35 minutes
- 2025-12-09 PASS 39 minutes
- 2025-12-10
  - PASS 41 minutes
  - PASS 37 minutes
- 2025-12-11

### Error 2025-12-11T01:46:06+00:00
```
2025-12-11T01:46:06.8842927Z === RUN   TestAccSearchDeploymentAPI_basic
2025-12-11T01:46:06.8844173Z === CONT  TestAccSearchDeploymentAPI_basic
2025-12-11T01:46:06.8847320Z   diagnostic_detail=
2025-12-11T01:46:06.8849443Z    diagnostic_severity=ERROR tf_req_id=e6f77a80-972d-c207-dc42-f1b1a4795779 tf_proto_version=6.10
2025-12-11T01:46:06.8856680Z   
2025-12-11T01:46:06.8857123Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-12-11T01:46:06.8857767Z         
2025-12-11T01:46:06.8858098Z         Error: Error waiting for changes in Create
2025-12-11T01:46:06.8858388Z         
2025-12-11T01:46:06.8858741Z           with mongodbatlas_search_deployment_api.test,
2025-12-11T01:46:06.8859422Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2025-12-11T01:46:06.8860056Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2025-12-11T01:46:06.8860378Z         
2025-12-11T01:46:06.8860824Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-12-11T01:46:06.8861240Z         timeout: 1h0m0s)
2025-12-11T01:46:06.8861725Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-12-11T01:46:06.8862370Z         transient error, wait before retrying to allow resource deletion to finish
2025-12-11T01:46:06.8873535Z    test_working_directory=/tmp/plugintest3912323394
2025-12-11T01:46:06.8874139Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-11T01:46:06.8874579Z         
2025-12-11T01:46:06.8874879Z         Error: error when destroying resource
2025-12-11T01:46:06.8875390Z         
2025-12-11T01:46:06.8875739Z         error deleting project (693a1136b6470d4a0678bacf):
2025-12-11T01:46:06.8876335Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/693a1136b6470d4a0678bacf
2025-12-11T01:46:06.8876833Z         DELETE: HTTP 409 Conflict (Error code:
2025-12-11T01:46:06.8877383Z         "CANNOT_CLOSE_GROUP_MANAGED_DEPLOYMENTS") Detail: Cannot close group because
2025-12-11T01:46:06.8877992Z         there are active managed deployments. Reason: Conflict. Params: [],
2025-12-11T01:46:06.8878406Z         BadRequestDetail: 
2025-12-11T01:46:06.8878722Z --- FAIL: TestAccSearchDeploymentAPI_basic (4392.57s)
```

- 2025-12-12 PASS 44 minutes
- 2025-12-13 PASS 40 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 36 minutes
- 2025-12-16 PASS 36 minutes
- 2025-12-17 PASS 40 minutes
- 2025-12-18 PASS 41 minutes
- 2025-12-19 PASS 41 minutes
- 2025-12-20 PASS 36 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 40 minutes
- 2025-12-23 PASS 34 minutes
- 2025-12-24 PASS 40 minutes
- 2025-12-25 PASS 54 minutes
- 2025-12-26 PASS 35 minutes
- 2025-12-27 PASS 35 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 38 minutes
- 2025-12-31 PASS 41 minutes
- 2026-01-01 PASS 32 minutes
- 2026-01-02 PASS 41 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 36 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 36 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 43 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 34 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 36 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
