# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:43](#error-2026-04-11t0043400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 125.02s
[2026-04-16 00:53](#error-2026-04-16t0053120000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032f981002038a8a121c3/clusters | dev | out_of_capacity | 7.06s
[2026-04-18 00:44](#error-2026-04-18t0044280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 47 minutes
- 2026-04-08 PASS 24 minutes
- 2026-04-09 PASS 30 minutes
- 2026-04-10 PASS 36 minutes
- 2026-04-11

### Error 2026-04-11T00:43:40+00:00
```
2026-04-11T00:43:40.1810523Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-04-11T00:43:40.1834908Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-04-11T00:45:45.2943399Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-04-11T00:45:45.2944370Z     resource_cluster_test.go:1304: Step 1/4 error: Error running apply: exit status 1
2026-04-11T00:45:45.2945048Z         
2026-04-11T00:45:45.2945739Z         Error: error creating project: test-acc-tf-p-8874437942961398809
2026-04-11T00:45:45.2946625Z         
2026-04-11T00:45:45.2946989Z           with mongodbatlas_project.test,
2026-04-11T00:45:45.2947613Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:45:45.2948192Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:45:45.2948614Z         
2026-04-11T00:45:45.2949100Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:45:45.2949990Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:45:45.2950595Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:45.3368240Z --- FAIL: TestAccCluster_basic_RedactClientLogData (125.16s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 28 minutes
- 2026-04-14 PASS 23 minutes
- 2026-04-15 PASS 26 minutes
- 2026-04-16

### Error 2026-04-16T00:53:12+00:00
```
2026-04-16T00:53:12.0710794Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-04-16T00:53:12.1274372Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-04-16T00:53:18.9445461Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-04-16T00:53:18.9446200Z     resource_cluster_test.go:1304: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:53:18.9446839Z         
2026-04-16T00:53:18.9448369Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032f981002038a8a121c3/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:18.9449929Z         
2026-04-16T00:53:18.9450267Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:18.9450927Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:18.9451812Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:18.9452140Z         
2026-04-16T00:53:19.2299048Z    test_name=TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade test_terraform_path=/home/runner/work/_temp/9471bf85-4be6-4dec-8183-4ca56d6cc8e8/terraform
2026-04-16T00:53:19.6879455Z --- FAIL: TestAccCluster_basic_RedactClientLogData (7.61s)
```

- 2026-04-17 PASS 25 minutes
- 2026-04-18

### Error 2026-04-18T00:44:28+00:00
```
2026-04-18T00:44:28.4015038Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-04-18T00:44:28.4268696Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-04-18T00:45:43.3798740Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-04-18T00:45:43.3799496Z     resource_cluster_test.go:1304: Step 1/4 error: Error running apply: exit status 1
2026-04-18T00:45:43.3800075Z         
2026-04-18T00:45:43.3800765Z         Error: error creating project: test-acc-tf-p-8462230800621540879
2026-04-18T00:45:43.3801144Z         
2026-04-18T00:45:43.3801631Z           with mongodbatlas_project.test,
2026-04-18T00:45:43.3802630Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-18T00:45:43.3803412Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-18T00:45:43.3803848Z         
2026-04-18T00:45:43.3804550Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T00:45:43.3805609Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T00:45:43.3806735Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:45:43.4235718Z --- FAIL: TestAccCluster_basic_RedactClientLogData (75.02s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 22 minutes
- 2026-04-21 PASS 26 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 30 minutes
- 2026-04-24 PASS 25 minutes
- 2026-04-25 PASS 24 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 24 minutes
- 2026-04-28 PASS 25 minutes
- 2026-04-29 PASS 29 minutes
- 2026-04-30 PASS 37 minutes
- 2026-05-01 PASS 42 minutes
- 2026-05-02 PASS 22 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 26 minutes
- 2026-05-05 PASS 43 minutes
- 2026-05-06 PASS 30 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 25 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 25 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 24 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 24 minutes
  - PASS 19 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 26 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 25 minutes
- 2026-05-04 PASS 45 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 23 minutes
