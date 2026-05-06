# cluster_outage_simulation/clusteroutagesimulation/TestAccClusterOutageSimulation_deleteOnCreateTimeout Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050340000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032578379397d109c2933/clusters | dev | out_of_capacity | 15.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS an hour
- 2026-04-08 PASS 57 minutes
- 2026-04-09 PASS an hour
- 2026-04-10 PASS an hour
- 2026-04-11 PASS 58 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 59 minutes
- 2026-04-14 PASS 59 minutes
- 2026-04-15 PASS 58 minutes
- 2026-04-16

### Error 2026-04-16T00:50:34+00:00
```
2026-04-16T00:50:34.6248146Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-04-16T00:50:34.6251757Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-04-16T00:50:49.6332906Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-04-16T00:50:49.6336753Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:49.632953817Z, ProjectID: 69e032578379397d109c2933, Cluster name: test-acc-tf-c-3043263759240015679
2026-04-16T00:50:50.4209944Z    test_terraform_path=/home/runner/work/_temp/c8f7c189-6891-439a-af45-ba2d545ed47f/terraform test_name=TestAccClusterOutageSimulation_deleteOnCreateTimeout test_working_directory=/tmp/plugintest2489369458 test_step_number=1
2026-04-16T00:50:50.4211408Z     resource_test.go:168: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T00:50:50.4212126Z         
2026-04-16T00:50:50.4212481Z         Error: Error in create
2026-04-16T00:50:50.4213055Z         
2026-04-16T00:50:50.4213455Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:50:50.4214443Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:50:50.4215153Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:50:50.4215509Z         
2026-04-16T00:50:50.4215944Z         cluster name: test-acc-tf-c-3043263759240015679, API error details:
2026-04-16T00:50:50.4216649Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032578379397d109c2933/clusters
2026-04-16T00:50:50.4217380Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:50:50.4218066Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:50:50.4218590Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:50.4657731Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (15.84s)
```

- 2026-04-17 PASS 57 minutes
- 2026-04-18 PASS 59 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS an hour
- 2026-04-21 PASS an hour
- 2026-04-22 PASS an hour
- 2026-04-23 PASS an hour
- 2026-04-24 PASS 59 minutes
- 2026-04-25 PASS 59 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS an hour
- 2026-04-28 PASS 58 minutes
- 2026-04-29 PASS 59 minutes
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 58 minutes
- 2026-05-02 PASS 59 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS an hour
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS an hour
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS an hour
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 58 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS an hour
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS an hour
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS an hour
- 2026-05-04 PASS 58 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS an hour
