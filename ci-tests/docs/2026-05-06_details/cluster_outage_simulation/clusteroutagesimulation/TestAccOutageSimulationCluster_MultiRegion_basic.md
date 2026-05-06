# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:45](#error-2026-04-07t0045250000) |  | dev | timeout | 13168.03s
[2026-04-16 00:50](#error-2026-04-16t0050340000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032578379397d109c2933/clusters | dev | out_of_capacity | 10.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:45:25+00:00
```
2026-04-07T00:45:25.0685279Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-04-07T00:45:25.0699851Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-04-07T00:45:40.0803608Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-04-07T00:45:40.0805729Z     pre_check.go:46: Time before creating cluster: 2026-04-07T00:45:40.080040776Z, ProjectID: 69d45381c0b364eb740df41b, Cluster name: test-acc-tf-c-7023786274801348615
2026-04-07T01:41:40.8062630Z   diagnostic_summary=
2026-04-07T01:41:40.8069846Z    diagnostic_detail="" diagnostic_severity=ERROR
2026-04-07T04:24:53.4039293Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-04-07T04:24:53.4040040Z     resource_test.go:64: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:24:53.4040555Z         
2026-04-07T04:24:53.4040815Z         Error: Error in delete
2026-04-07T04:24:53.4041071Z         
2026-04-07T04:24:53.4041524Z         cluster=test-acc-tf-c-7023786274801348615 didn't reach desired state:
2026-04-07T04:24:53.4042416Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:24:53.4042932Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:24:53.4043358Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (13168.33s)
```

- 2026-04-08 PASS 45 minutes
- 2026-04-09 PASS 58 minutes
- 2026-04-10 PASS 57 minutes
- 2026-04-11 PASS 43 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 45 minutes
- 2026-04-14 PASS 45 minutes
- 2026-04-15 PASS 45 minutes
- 2026-04-16

### Error 2026-04-16T00:50:34+00:00
```
2026-04-16T00:50:34.6244101Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2026-04-16T00:50:34.6252249Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2026-04-16T00:50:44.6295563Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2026-04-16T00:50:44.6296843Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:44.629209065Z, ProjectID: 69e032578379397d109c2933, Cluster name: test-acc-tf-c-4255711692022423575
2026-04-16T00:50:45.5067853Z    test_terraform_path=/home/runner/work/_temp/c8f7c189-6891-439a-af45-ba2d545ed47f/terraform test_name=TestAccOutageSimulationCluster_MultiRegion_basic
2026-04-16T00:50:45.5069421Z     resource_test.go:64: Step 1/1 error: Error running apply: exit status 1
2026-04-16T00:50:45.5070392Z         
2026-04-16T00:50:45.5070832Z         Error: Error in create
2026-04-16T00:50:45.5071249Z         
2026-04-16T00:50:45.5071956Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:50:45.5073504Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:50:45.5074825Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:50:45.5075446Z         
2026-04-16T00:50:45.5076226Z         cluster name: test-acc-tf-c-4255711692022423575, API error details:
2026-04-16T00:50:45.5077070Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032578379397d109c2933/clusters
2026-04-16T00:50:45.5078211Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:50:45.5079063Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:50:45.5079642Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:45.5553557Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (10.93s)
```

- 2026-04-17 PASS 52 minutes
- 2026-04-18 PASS 48 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 46 minutes
- 2026-04-21 PASS 47 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 55 minutes
- 2026-04-24 PASS 47 minutes
- 2026-04-25 PASS 44 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 45 minutes
- 2026-04-28 PASS 51 minutes
- 2026-04-29 PASS 49 minutes
- 2026-04-30 PASS an hour
- 2026-05-01 PASS an hour
- 2026-05-02 PASS 44 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 48 minutes
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 49 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 45 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 43 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 45 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 45 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 46 minutes
- 2026-05-04 PASS 48 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 46 minutes
