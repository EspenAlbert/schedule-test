# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:43](#error-2026-01-07t0043030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-12-11 PASS 3 minutes
- 2025-12-12 PASS 3 minutes
- 2025-12-13 PASS 3 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 minutes
- 2025-12-16 PASS 3 minutes
- 2025-12-17 PASS 3 minutes
- 2025-12-18 PASS 2 minutes
- 2025-12-19 PASS 2 minutes
- 2025-12-20 PASS 2 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 3 minutes
- 2025-12-23 PASS 3 minutes
- 2025-12-24 PASS 2 minutes
- 2025-12-25 PASS 3 minutes
- 2025-12-26 PASS 3 minutes
- 2025-12-27 PASS 2 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 2 minutes
- 2025-12-31 PASS 2 minutes
- 2026-01-01 PASS 2 minutes
- 2026-01-02 PASS 3 minutes
- 2026-01-03 PASS 3 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 3 minutes
- 2026-01-06 PASS 2 minutes
- 2026-01-07

### Error 2026-01-07T00:43:03+00:00
```
2026-01-07T00:43:03.3479294Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-01-07T00:43:03.3488283Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-01-07T00:43:03.3557847Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-01-07T00:43:03.3558561Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:43:03.3558950Z         
2026-01-07T00:43:03.3559543Z         Error: error creating project: test-acc-tf-p-1570295783499024491
2026-01-07T00:43:03.3559920Z         
2026-01-07T00:43:03.3560268Z           with mongodbatlas_project.my_project,
2026-01-07T00:43:03.3560920Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-01-07T00:43:03.3561638Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-01-07T00:43:03.3561978Z         
2026-01-07T00:43:03.3562473Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:43:03.3563146Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:43:03.3563897Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:43:03.3564348Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (4.64s)
```

- 2026-01-08 PASS 3 minutes

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
- 2025-12-28 PASS 3 minutes
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
- 2026-01-08 PASS 2 minutes
