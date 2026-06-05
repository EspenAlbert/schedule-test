# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 12 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09 PASS 17 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 10 seconds
- 2026-05-12 PASS 11 seconds
- 2026-05-13 PASS 12 seconds
- 2026-05-14 PASS 12 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 11 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 12 seconds
- 2026-05-19 PASS 12 seconds
- 2026-05-20 PASS 11 seconds
- 2026-05-21 PASS 10 seconds
- 2026-05-22 PASS 11 seconds
- 2026-05-23 PASS 12 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 6 seconds
- 2026-05-26 PASS 16 seconds
- 2026-05-27 PASS 12 seconds
- 2026-05-28

### Error 2026-05-28T01:02:44+00:00
```
2026-05-28T01:02:44.2476415Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2026-05-28T01:02:49.4528571Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2026-05-28T01:02:51.2493589Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2026-05-28T01:02:51.2494978Z     resource_test.go:590: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-28T01:02:51.2495878Z         
2026-05-28T01:02:51.2496614Z         Error: error creating project: test-acc-tf-p-2814234680367143030
2026-05-28T01:02:51.2497359Z         
2026-05-28T01:02:51.2498129Z           with mongodbatlas_project.cluster_project,
2026-05-28T01:02:51.2499430Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-28T01:02:51.2500813Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-28T01:02:51.2501464Z         
2026-05-28T01:02:51.2502400Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:02:51.2503793Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:02:51.2505125Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:02:51.2506423Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:02:51.2507335Z         BadRequestDetail: 
2026-05-28T01:02:51.2672992Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/a9a9d293-9f2b-4cfa-a9df-55ac1c37838e/terraform test_name=TestAccClusterAdvancedCluster_withLabels
2026-05-28T01:02:51.3307187Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (1.88s)
```

- 2026-05-29 PASS 11 seconds
- 2026-05-30 PASS 12 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 10 seconds
- 2026-06-02 PASS 13 seconds
- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 14 seconds
- 2026-06-05 PASS 11 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 10 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 10 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 11 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 12 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
