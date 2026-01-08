# network/networkpeering/TestAccNetworkNetworkPeering_timeouts Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:43](#error-2026-01-07t0043030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92eaf4f6cc389e7e7af | dev | flaky_500 | 3.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-12-11 PASS 2 minutes
- 2025-12-12 PASS 2 minutes
- 2025-12-13 PASS 2 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 2 minutes
- 2025-12-16 PASS 2 minutes
- 2025-12-17 PASS 2 minutes
- 2025-12-18 PASS 2 minutes
- 2025-12-19 PASS 2 minutes
- 2025-12-20 PASS 2 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 2 minutes
- 2025-12-23 PASS 2 minutes
- 2025-12-24 PASS 2 minutes
- 2025-12-25 PASS 2 minutes
- 2025-12-26 PASS 2 minutes
- 2025-12-27 PASS 2 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 2 minutes
- 2025-12-31 PASS 2 minutes
- 2026-01-01 PASS 2 minutes
- 2026-01-02 PASS 2 minutes
- 2026-01-03 PASS 2 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 2 minutes
- 2026-01-06 PASS 2 minutes
- 2026-01-07

### Error 2026-01-07T00:43:03+00:00
```
2026-01-07T00:43:03.3485923Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-01-07T00:43:03.3489233Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-01-07T00:43:03.3503238Z   
2026-01-07T00:43:03.3539017Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-01-07T00:43:03.3539776Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-07T00:43:03.3540276Z         
2026-01-07T00:43:03.3540643Z         Error: error when getting project after create
2026-01-07T00:43:03.3540987Z         
2026-01-07T00:43:03.3541420Z           with mongodbatlas_project.my_project,
2026-01-07T00:43:03.3542122Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-01-07T00:43:03.3542744Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-01-07T00:43:03.3543083Z         
2026-01-07T00:43:03.3543454Z         error getting project (695da92eaf4f6cc389e7e7af):
2026-01-07T00:43:03.3544063Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92eaf4f6cc389e7e7af
2026-01-07T00:43:03.3544757Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:43:03.3545371Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:43:03.3545796Z         BadRequestDetail: 
2026-01-07T00:43:03.3546151Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (3.84s)
```

- 2026-01-08 PASS 2 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 2 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 2 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 2 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 2 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
