# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-24 00:31](#error-2025-12-24t0031080000) |  | dev | flaky_client | 1385.01s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 59 minutes
- 2025-12-05 PASS 2 hours
- 2025-12-06 PASS 48 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 49 minutes
- 2025-12-09 PASS 47 minutes
- 2025-12-10
  - PASS 51 minutes
  - PASS 41 minutes
- 2025-12-11 PASS 44 minutes
- 2025-12-12 PASS 51 minutes
- 2025-12-13 PASS 43 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 46 minutes
- 2025-12-16 PASS 46 minutes
- 2025-12-17 PASS 50 minutes
- 2025-12-18 PASS 49 minutes
- 2025-12-19 PASS 49 minutes
- 2025-12-20 PASS 49 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 53 minutes
- 2025-12-23 PASS 46 minutes
- 2025-12-24
  - FAIL 23 minutes

### Error 2025-12-24T00:31:08+00:00
```
2025-12-24T00:31:08.6470665Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-12-24T00:31:08.6479303Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-12-24T00:31:23.6540257Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-12-24T00:31:23.6542070Z     pre_check.go:46: Time before creating cluster: 2025-12-24T00:31:23.653702297Z, ProjectID: 694b344a1202fa792787d999, Cluster name: test-acc-tf-c-4985483273409353205
2025-12-24T00:54:13.1982333Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-12-24T00:54:13.1982970Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2025-12-24T00:54:13.1983335Z         
2025-12-24T00:54:13.1985551Z         Error: error starting MongoDB Atlas Cluster Outage Simulation for Project (694b344a1202fa792787d999), Cluster (test-acc-tf-c-4985483273409353205): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/694b344a1202fa792787d999/clusters/test-acc-tf-c-4985483273409353205/outageSimulation": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-12-24T00:54:13.1987191Z         
2025-12-24T00:54:13.1987598Z           with mongodbatlas_cluster_outage_simulation.test_outage,
2025-12-24T00:54:13.1988387Z           on terraform_plugin_test.tf line 64, in resource "mongodbatlas_cluster_outage_simulation" "test_outage":
2025-12-24T00:54:13.1989111Z           64: 		resource "mongodbatlas_cluster_outage_simulation" "test_outage" {
2025-12-24T00:54:13.1989475Z         
2025-12-24T00:54:13.7411276Z    test_step_number=1 test_name=TestAccOutageSimulationCluster_MultiRegion_basic test_terraform_path=/home/runner/work/_temp/6cfe0686-28ad-41c0-92b1-33cf894fb246/terraform
2025-12-24T00:54:13.7412271Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-24T00:54:13.7412701Z         
2025-12-24T00:54:13.7412955Z         Error: Error in delete
2025-12-24T00:54:13.7413198Z         
2025-12-24T00:54:13.7413749Z         cluster name: test-acc-tf-c-4985483273409353205, API error details:
2025-12-24T00:54:13.7414625Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/694b344a1202fa792787d999/clusters/test-acc-tf-c-4985483273409353205
2025-12-24T00:54:13.7415275Z         DELETE: HTTP 400 Bad Request (Error code:
2025-12-24T00:54:13.7415798Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-12-24T00:54:13.7416630Z         Detail: Cannot terminate cluster test-acc-tf-c-4985483273409353205 in project
2025-12-24T00:54:13.7417291Z         test-acc-tf-p-6685251199156260092 because it is undergoing a regional outage
2025-12-24T00:54:13.7417910Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-12-24T00:54:13.7418423Z         Request. Params: [test-acc-tf-c-4985483273409353205
2025-12-24T00:54:13.7418882Z         test-acc-tf-p-6685251199156260092], BadRequestDetail: 
2025-12-24T00:54:13.7419310Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (1385.09s)
```

  - PASS 50 minutes
- 2025-12-25 PASS 49 minutes
- 2025-12-26 PASS 49 minutes
- 2025-12-27 PASS 51 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 49 minutes
- 2025-12-31 PASS 44 minutes
- 2026-01-01 PASS 50 minutes
- 2026-01-02 PASS 53 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 47 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 47 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 49 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 48 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 50 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
