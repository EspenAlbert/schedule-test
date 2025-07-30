# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029490000) |  | dev | timeout | 10802.10s
[2025-07-12 00:29](#error-2025-07-12t0029070000) |  | dev | flaky_client | 2022.02s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10802.07s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 33 minutes
  - PASS 33 minutes
  - PASS 32 minutes
  - PASS 36 minutes
  - PASS 34 minutes
  - PASS 58 minutes
- 2025-07-02 PASS 32 minutes
- 2025-07-03 PASS 38 minutes
- 2025-07-04 PASS 48 minutes
- 2025-07-05 PASS 36 minutes
- 2025-07-06 PASS 33 minutes
- 2025-07-07 PASS 32 minutes
- 2025-07-08 PASS 33 minutes
- 2025-07-09 PASS 52 minutes
- 2025-07-10
  - PASS 41 minutes
  - PASS 31 minutes
- 2025-07-11

### Error 2025-07-11T00:29:49+00:00
```
2025-07-11T00:29:49.8179373Z === RUN   TestAccCluster_RegionsConfig
2025-07-11T00:29:49.8379826Z === CONT  TestAccCluster_RegionsConfig
2025-07-11T03:29:52.7606958Z === NAME  TestAccCluster_RegionsConfig
2025-07-11T03:29:52.7607452Z     resource_cluster_test.go:1208: Step 1/3 error: Error running apply: exit status 1
2025-07-11T03:29:52.7607849Z         
2025-07-11T03:29:52.7608547Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:52.7609063Z         
2025-07-11T03:29:52.7609362Z           with mongodbatlas_cluster.test,
2025-07-11T03:29:52.7609955Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:29:52.7610551Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-11T03:29:52.7610962Z         
2025-07-11T03:29:52.8117666Z --- FAIL: TestAccCluster_RegionsConfig (10802.98s)
```

- 2025-07-12

### Error 2025-07-12T00:29:07+00:00
```
2025-07-12T00:29:07.8676553Z === RUN   TestAccCluster_RegionsConfig
2025-07-12T00:29:07.8798771Z === CONT  TestAccCluster_RegionsConfig
2025-07-12T00:59:16.3810158Z === NAME  TestAccCluster_RegionsConfig
2025-07-12T00:59:16.3810787Z     resource_cluster_test.go:1208: Step 3/3 error: Error running apply: exit status 1
2025-07-12T00:59:16.3811277Z         
2025-07-12T00:59:16.3813439Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5628675651466410442): error updating MongoDB Cluster (test-acc-tf-c-5628675651466410442): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6871ac512085fb14b691b80f/clusters/test-acc-tf-c-5628675651466410442": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-12T00:59:16.3814881Z         
2025-07-12T00:59:16.3815172Z           with mongodbatlas_cluster.test,
2025-07-12T00:59:16.3815752Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-12T00:59:16.3816476Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-12T00:59:16.3816769Z         
2025-07-12T01:02:50.0969371Z --- FAIL: TestAccCluster_RegionsConfig (2022.22s)
```

- 2025-07-13 PASS an hour
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0103461Z === RUN   TestAccCluster_RegionsConfig
2025-07-14T00:31:01.0118274Z === CONT  TestAccCluster_RegionsConfig
2025-07-14T03:31:03.6343019Z === NAME  TestAccCluster_RegionsConfig
2025-07-14T03:31:03.6343816Z     resource_cluster_test.go:1208: Step 1/3 error: Error running apply: exit status 1
2025-07-14T03:31:03.6344422Z         
2025-07-14T03:31:03.6345664Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.6346618Z         
2025-07-14T03:31:03.6347120Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:03.6348417Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:03.6349330Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:03.6349952Z         
2025-07-14T03:31:03.6701992Z    test_terraform_path=/home/runner/work/_temp/099fb541-3be5-4482-9e11-b7821dad0aed/terraform
2025-07-14T03:31:03.7009554Z --- FAIL: TestAccCluster_RegionsConfig (10802.69s)
```

- 2025-07-15 PASS 38 minutes
- 2025-07-16 PASS 37 minutes
- 2025-07-17 PASS 34 minutes
- 2025-07-18 PASS 59 minutes
- 2025-07-19 PASS 35 minutes
- 2025-07-20 PASS 35 minutes
- 2025-07-21 PASS 32 minutes
- 2025-07-22 PASS 32 minutes
- 2025-07-23
  - PASS 37 minutes
  - PASS 33 minutes
  - PASS 33 minutes
  - PASS 33 minutes
- 2025-07-24 PASS 36 minutes
- 2025-07-25 PASS 38 minutes
- 2025-07-26 PASS 37 minutes
- 2025-07-27 PASS 36 minutes
- 2025-07-28 PASS 37 minutes
- 2025-07-29 PASS 37 minutes
- 2025-07-30 PASS 37 minutes