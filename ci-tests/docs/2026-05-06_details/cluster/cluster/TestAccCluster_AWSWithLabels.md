# cluster/cluster/TestAccCluster_AWSWithLabels Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053080000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032be1ec945fedc72a160/clusters | dev | out_of_capacity | 10.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 55 minutes
- 2026-04-08 PASS 25 minutes
- 2026-04-09 PASS 36 minutes
- 2026-04-10 PASS 36 minutes
- 2026-04-11 PASS 20 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 28 minutes
- 2026-04-14 PASS 23 minutes
- 2026-04-15 PASS 25 minutes
- 2026-04-16

### Error 2026-04-16T00:53:08+00:00
```
2026-04-16T00:53:08.4138452Z === RUN   TestAccCluster_AWSWithLabels
2026-04-16T00:53:12.0720321Z === CONT  TestAccCluster_AWSWithLabels
2026-04-16T00:53:22.0727395Z === NAME  TestAccCluster_AWSWithLabels
2026-04-16T00:53:22.0728664Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:22.07242072Z, ProjectID: 69e032be1ec945fedc72a160, Cluster name: test-acc-tf-c-7315930104042894263
2026-04-16T00:53:22.8176550Z   
2026-04-16T00:53:22.8177345Z     resource_cluster_test.go:622: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:53:22.8178055Z         
2026-04-16T00:53:22.8180890Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032be1ec945fedc72a160/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:22.8182625Z         
2026-04-16T00:53:22.8183467Z           with mongodbatlas_cluster.aws_with_labels,
2026-04-16T00:53:22.8184757Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "aws_with_labels":
2026-04-16T00:53:22.8185959Z           12: 		resource "mongodbatlas_cluster" "aws_with_labels" {
2026-04-16T00:53:22.8186543Z         
2026-04-16T00:53:22.8648866Z --- FAIL: TestAccCluster_AWSWithLabels (10.79s)
```

- 2026-04-17 PASS 24 minutes
- 2026-04-18 PASS 30 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 21 minutes
- 2026-04-21 PASS 27 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 30 minutes
- 2026-04-24 PASS 25 minutes
- 2026-04-25 PASS 22 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 24 minutes
- 2026-04-28 PASS 24 minutes
- 2026-04-29 PASS 27 minutes
- 2026-04-30 PASS 37 minutes
- 2026-05-01 PASS 25 minutes
- 2026-05-02 PASS 21 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 25 minutes
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
- 2026-04-19 PASS 23 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 24 minutes
  - PASS 19 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 28 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 23 minutes
- 2026-05-04 PASS 23 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 23 minutes
