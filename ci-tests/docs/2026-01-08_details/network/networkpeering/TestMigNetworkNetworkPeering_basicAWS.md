# network/networkpeering/TestMigNetworkNetworkPeering_basicAWS Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:43](#error-2026-01-07t0043030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 2 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 3 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 3 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 3 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 2 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 3 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 3 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 3 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 2 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:43:03+00:00
```
2026-01-07T00:43:03.3478407Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2026-01-07T00:43:03.3486793Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2026-01-07T00:43:03.3519419Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2026-01-07T00:43:03.3519977Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:43:03.3520399Z         
2026-01-07T00:43:03.3520838Z         Error: error creating project: test-acc-tf-p-1418775627209631908
2026-01-07T00:43:03.3521216Z         
2026-01-07T00:43:03.3521564Z           with mongodbatlas_project.my_project,
2026-01-07T00:43:03.3522225Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2026-01-07T00:43:03.3522839Z           14: 	resource "mongodbatlas_project" "my_project" {
2026-01-07T00:43:03.3523173Z         
2026-01-07T00:43:03.3523793Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:43:03.3524462Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:43:03.3525067Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:43:03.3530206Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (4.81s)
```

- 2026-01-08: MISSING

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
- 2025-12-21 PASS 3 minutes
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
