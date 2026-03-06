# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036550000) |  | dev |  | 1164.04s
[2026-02-26 00:36](#error-2026-02-26t0036260000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/699f95876ef93d0b6c18068e/clusters | dev | out_of_capacity | 3.05s
[2026-02-28 00:34](#error-2026-02-28t0034430000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69a238219581f23341500145/clusters | dev | out_of_capacity | 2.06s

### Timeline
- 2026-02-04: MISSING
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

- 2026-02-25 PASS 20 minutes
- 2026-02-26

### Error 2026-02-26T00:36:26+00:00
```
2026-02-26T00:36:26.7857425Z === RUN   TestAccCluster_WithBiConnectorGCP
2026-02-26T00:36:34.5418931Z === CONT  TestAccCluster_WithBiConnectorGCP
2026-02-26T00:36:38.0095053Z === NAME  TestAccCluster_WithBiConnectorGCP
2026-02-26T00:36:38.0096087Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2026-02-26T00:36:38.0096663Z         
2026-02-26T00:36:38.0098444Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/699f95876ef93d0b6c18068e/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-26T00:36:38.0099891Z         
2026-02-26T00:36:38.0100225Z           with mongodbatlas_cluster.basic_gcp,
2026-02-26T00:36:38.0100877Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-02-26T00:36:38.0101503Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-02-26T00:36:38.0101825Z         
2026-02-26T00:36:38.0555177Z --- FAIL: TestAccCluster_WithBiConnectorGCP (3.51s)
```

- 2026-02-27 PASS 22 minutes
- 2026-02-28

### Error 2026-02-28T00:34:43+00:00
```
2026-02-28T00:34:43.7334271Z === RUN   TestAccCluster_WithBiConnectorGCP
2026-02-28T00:34:48.9421201Z === CONT  TestAccCluster_WithBiConnectorGCP
2026-02-28T00:34:51.4578517Z    test_terraform_path=/home/runner/work/_temp/e3f145a2-3b28-45a3-b2eb-dc121eb173c5/terraform
2026-02-28T00:34:51.5122402Z === NAME  TestAccCluster_WithBiConnectorGCP
2026-02-28T00:34:51.5123286Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2026-02-28T00:34:51.5123913Z         
2026-02-28T00:34:51.5125725Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69a238219581f23341500145/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-28T00:34:51.5127582Z         
2026-02-28T00:34:51.5128053Z           with mongodbatlas_cluster.basic_gcp,
2026-02-28T00:34:51.5128705Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-02-28T00:34:51.5129319Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-02-28T00:34:51.5129631Z         
2026-02-28T00:34:51.5607556Z --- FAIL: TestAccCluster_WithBiConnectorGCP (2.62s)
```

- 2026-03-01: MISSING
- 2026-03-02 PASS 19 minutes
- 2026-03-03 PASS 23 minutes
- 2026-03-04 PASS 21 minutes
- 2026-03-05 PASS 24 minutes
- 2026-03-06 PASS 29 minutes

## QA Environment
### Timeline
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
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 25 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 23 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
