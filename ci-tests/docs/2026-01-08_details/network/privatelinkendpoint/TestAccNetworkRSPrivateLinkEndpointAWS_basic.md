# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:43](#error-2026-01-07t0043030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 3 minutes
  - PASS 4 minutes
- 2025-12-11 PASS 3 minutes
- 2025-12-12 PASS 3 minutes
- 2025-12-13 PASS 3 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 minutes
- 2025-12-16 PASS 3 minutes
- 2025-12-17 PASS 3 minutes
- 2025-12-18 PASS 4 minutes
- 2025-12-19 PASS 3 minutes
- 2025-12-20 PASS 4 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 3 minutes
- 2025-12-23 PASS 4 minutes
- 2025-12-24 PASS 4 minutes
- 2025-12-25 PASS 4 minutes
- 2025-12-26 PASS 4 minutes
- 2025-12-27 PASS 3 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 3 minutes
- 2025-12-31 PASS 4 minutes
- 2026-01-01 PASS 3 minutes
- 2026-01-02 PASS 3 minutes
- 2026-01-03 PASS 3 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 3 minutes
- 2026-01-06 PASS 3 minutes
- 2026-01-07

### Error 2026-01-07T00:43:03+00:00
```
2026-01-07T00:43:03.3612942Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-01-07T00:43:03.3619197Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-01-07T00:43:03.3620089Z   diagnostic_summary=
2026-01-07T00:43:03.3623432Z    diagnostic_detail="" diagnostic_severity=ERROR tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_req_id=bfb4e47a-522b-e4b0-4868-41a8cdc6d804 tf_resource_type=mongodbatlas_privatelink_endpoint
2026-01-07T00:43:03.3636198Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2026-01-07T00:43:03.3636735Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:43:03.3637129Z         
2026-01-07T00:43:03.3637569Z         Error: error creating project: test-acc-tf-p-4556026085548805323
2026-01-07T00:43:03.3638129Z         
2026-01-07T00:43:03.3638486Z           with mongodbatlas_project.test,
2026-01-07T00:43:03.3639109Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:43:03.3639684Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:43:03.3640006Z         
2026-01-07T00:43:03.3640497Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:43:03.3641160Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:43:03.3641763Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:43:03.3642248Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (2.64s)
```

- 2026-01-08 PASS 3 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 3 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 3 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 4 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 3 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
