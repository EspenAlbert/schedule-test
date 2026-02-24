# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-30 00:36](#error-2026-01-30t0036120000) |  | dev |  | 1427.07s
[2026-02-03 00:39](#error-2026-02-03t0039180000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters | dev | out_of_capacity | 2.04s
[2026-02-24 00:36](#error-2026-02-24t0036550000) |  | dev |  | 1164.04s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27 PASS 21 minutes
- 2026-01-28 PASS 19 minutes
- 2026-01-29 PASS 28 minutes
- 2026-01-30

### Error 2026-01-30T00:36:12+00:00
```
2026-01-30T00:36:12.6723407Z === RUN   TestAccCluster_WithBiConnectorGCP
2026-01-30T00:36:18.7456043Z === CONT  TestAccCluster_WithBiConnectorGCP
2026-01-30T01:00:02.6966153Z === NAME  TestAccCluster_WithBiConnectorGCP
2026-01-30T01:00:02.6966863Z     resource_cluster_test.go:412: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-30T01:00:02.6967381Z         
2026-01-30T01:00:02.6968529Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-4739161432222969380): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/697bfcfc60a6258777482c18/clusters/test-acc-tf-c-4739161432222969380": EOF
2026-01-30T01:00:02.6969345Z         
2026-01-30T01:00:02.6969618Z --- FAIL: TestAccCluster_WithBiConnectorGCP (1427.74s)
```

- 2026-01-31 PASS 17 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 17 minutes
- 2026-02-03

### Error 2026-02-03T00:39:18+00:00
```
2026-02-03T00:39:18.5540242Z === RUN   TestAccCluster_WithBiConnectorGCP
2026-02-03T00:39:24.5586068Z === CONT  TestAccCluster_WithBiConnectorGCP
2026-02-03T00:39:26.9188194Z === NAME  TestAccCluster_WithBiConnectorGCP
2026-02-03T00:39:26.9189136Z     resource_cluster_test.go:412: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:39:26.9199674Z         
2026-02-03T00:39:26.9202529Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:26.9204516Z         
2026-02-03T00:39:26.9205131Z           with mongodbatlas_cluster.basic_gcp,
2026-02-03T00:39:26.9206333Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-02-03T00:39:26.9207456Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-02-03T00:39:26.9208048Z         
2026-02-03T00:39:26.9398028Z    test_working_directory=/tmp/plugintest3738559483 test_step_number=1 test_name=TestAccCluster_RegionsConfig
2026-02-03T00:39:27.0095186Z --- FAIL: TestAccCluster_WithBiConnectorGCP (2.45s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 21 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 22 minutes
- 2026-02-10 PASS 20 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 21 minutes
- 2026-02-13 PASS 18 minutes
- 2026-02-14 PASS 19 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 19 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 23 minutes
- 2026-02-19 PASS 37 minutes
- 2026-02-20 PASS 22 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 22 minutes
- 2026-02-24

### Error 2026-02-24T00:36:55+00:00
```
2026-02-24T00:36:55.7981800Z === RUN   TestAccCluster_WithBiConnectorGCP
2026-02-24T00:37:02.7176299Z === CONT  TestAccCluster_WithBiConnectorGCP
2026-02-24T00:51:59.5382956Z === NAME  TestAccCluster_WithBiConnectorGCP
2026-02-24T00:51:59.5383956Z     resource_cluster_test.go:412: Step 2/2 error: Error running pre-apply plan: exit status 1
2026-02-24T00:51:59.5384695Z         
2026-02-24T00:51:59.5386144Z         Error: error reading Advanced Configuration Option (v20240530) for MongoDB Cluster (test-acc-tf-c-5348577857337818976): undefined response type
2026-02-24T00:51:59.5387372Z         
2026-02-24T00:51:59.5387901Z           with mongodbatlas_cluster.basic_gcp,
2026-02-24T00:51:59.5389022Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-02-24T00:51:59.5390059Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-02-24T00:51:59.5390578Z         
2026-02-24T00:52:01.0363037Z    test_terraform_path=/home/runner/work/_temp/5202aa85-26bc-4031-8145-a87a186217d7/terraform test_name=TestAccCluster_basicAdvancedConf
2026-02-24T00:56:27.1058817Z --- FAIL: TestAccCluster_WithBiConnectorGCP (1164.39s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 19 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 16 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 18 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 27 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 19 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 18 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
