# cluster/cluster/TestAccCluster_withAutoScalingAWS Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030390000) | UNEXPECTED_ERROR /api/atlas/v1.0/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-7423602412734887633 | dev | flaky_500 | 563.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-12-11 PASS 15 minutes
- 2025-12-12 PASS 17 minutes
- 2025-12-13 PASS 19 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 minutes
- 2025-12-16 PASS 18 minutes
- 2025-12-17 PASS 19 minutes
- 2025-12-18 PASS 22 minutes
- 2025-12-19 PASS 19 minutes
- 2025-12-20 PASS 14 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 minutes
- 2025-12-23 PASS 17 minutes
- 2025-12-24 PASS 22 minutes
- 2025-12-25 PASS 29 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 14 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 15 minutes
- 2025-12-31 PASS 16 minutes
- 2026-01-01 PASS 17 minutes
- 2026-01-02 PASS 17 minutes
- 2026-01-03 PASS 15 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 17 minutes
- 2026-01-06 PASS 14 minutes
- 2026-01-07

### Error 2026-01-07T00:30:39+00:00
```
2026-01-07T00:30:39.8808857Z === RUN   TestAccCluster_withAutoScalingAWS
2026-01-07T00:30:39.8944252Z === CONT  TestAccCluster_withAutoScalingAWS
2026-01-07T00:31:24.9045875Z === NAME  TestAccCluster_withAutoScalingAWS
2026-01-07T00:31:24.9047959Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:24.904278987Z, ProjectID: 695da92baf4f6cc389e7cd9f, Cluster name: test-acc-tf-c-7423602412734887633
2026-01-07T00:39:02.5604442Z === NAME  TestAccCluster_withAutoScalingAWS
2026-01-07T00:39:02.5605120Z     resource_cluster_test.go:981: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:39:02.5605655Z         
2026-01-07T00:39:02.5607041Z         Error: error reading MongoDB Cluster (test-acc-tf-c-7423602412734887633): GET https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-7423602412734887633: 500 (request "UNEXPECTED_ERROR") Unexpected error.
2026-01-07T00:39:02.5608193Z         
2026-01-07T00:39:02.5608919Z           with data.mongodbatlas_cluster.test,
2026-01-07T00:39:02.5609646Z           on terraform_plugin_test.tf line 43, in data "mongodbatlas_cluster" "test":
2026-01-07T00:39:02.5610167Z           43: 		data "mongodbatlas_cluster" "test" {
2026-01-07T00:39:02.5610629Z         
2026-01-07T00:39:26.2108775Z    test_name=TestAccCluster_MultiRegion test_terraform_path=/home/runner/work/_temp/50a2f82a-27b1-4d8a-a970-4f5fa4965667/terraform
2026-01-07T00:40:03.3128857Z === NAME  TestAccCluster_withAutoScalingAWS
2026-01-07T00:40:03.3129432Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:40:03.3129856Z         
2026-01-07T00:40:03.3131704Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-7423602412734887633): https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-7423602412734887633 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:40:03.3133254Z         
2026-01-07T00:40:03.3133503Z --- FAIL: TestAccCluster_withAutoScalingAWS (563.42s)
```

- 2026-01-08 PASS 17 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 16 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 14 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 15 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 13 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
