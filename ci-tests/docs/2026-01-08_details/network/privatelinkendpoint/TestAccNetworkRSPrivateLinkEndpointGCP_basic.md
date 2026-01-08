# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointGCP_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:43](#error-2026-01-07t0043030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92baf4f6cc389e7cefa | dev | flaky_500 | 573.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 9 minutes
  - PASS 9 minutes
- 2025-12-11 PASS 9 minutes
- 2025-12-12 PASS 9 minutes
- 2025-12-13 PASS 9 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 8 minutes
- 2025-12-16 PASS 8 minutes
- 2025-12-17 PASS 9 minutes
- 2025-12-18 PASS 9 minutes
- 2025-12-19 PASS 9 minutes
- 2025-12-20 PASS 8 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 10 minutes
- 2025-12-23 PASS 8 minutes
- 2025-12-24 PASS 9 minutes
- 2025-12-25 PASS 8 minutes
- 2025-12-26 PASS 8 minutes
- 2025-12-27 PASS 8 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 9 minutes
- 2025-12-31 PASS 8 minutes
- 2026-01-01 PASS 9 minutes
- 2026-01-02 PASS 8 minutes
- 2026-01-03 PASS 8 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 8 minutes
- 2026-01-06 PASS 10 minutes
- 2026-01-07

### Error 2026-01-07T00:43:03+00:00
```
2026-01-07T00:43:03.3614680Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2026-01-07T00:43:03.3617717Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2026-01-07T00:43:03.3655738Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2026-01-07T00:43:03.3656337Z     resource_test.go:95: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2026-01-07T00:43:03.3656777Z         
2026-01-07T00:43:03.3657280Z         Error: error when getting project from Atlas
2026-01-07T00:43:03.3657621Z         
2026-01-07T00:43:03.3658060Z           with mongodbatlas_project.test,
2026-01-07T00:43:03.3658695Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:43:03.3659263Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:43:03.3659584Z         
2026-01-07T00:43:03.3659954Z         error getting project (695da92baf4f6cc389e7cefa):
2026-01-07T00:43:03.3660564Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92baf4f6cc389e7cefa
2026-01-07T00:43:03.3661249Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:43:03.3661870Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:43:03.3662289Z         BadRequestDetail: 
2026-01-07T00:43:03.3662678Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (573.34s)
```

- 2026-01-08 PASS 9 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 7 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 7 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 8 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 7 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 8 minutes
