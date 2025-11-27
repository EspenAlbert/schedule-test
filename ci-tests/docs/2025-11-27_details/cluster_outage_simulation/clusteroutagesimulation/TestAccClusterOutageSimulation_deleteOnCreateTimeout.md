# cluster_outage_simulation/clusteroutagesimulation/TestAccClusterOutageSimulation_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028000000) |  | dev | 3346.09s
[2025-11-19 09:29](#error-2025-11-19t0929360000) |  | dev | 1755.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 59 minutes
- 2025-10-30

### Error 2025-10-30T00:28:00+00:00
```
2025-10-30T00:28:00.9403758Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-30T00:28:00.9414454Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-30T00:28:10.9448097Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-30T00:28:10.9452204Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:10.944491276Z, ProjectID: 6902b10fabf4374f32987fb9, Cluster name: test-acc-tf-c-7633725676873461003
2025-10-30T01:23:47.8530574Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-30T01:23:47.8531394Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:23:47.8531894Z         
2025-10-30T01:23:47.8532168Z         Error: Error in delete
2025-10-30T01:23:47.8532428Z         
2025-10-30T01:23:47.8533089Z         cluster name: test-acc-tf-c-7633725676873461003, API error details:
2025-10-30T01:23:47.8533971Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b10fabf4374f32987fb9/clusters/test-acc-tf-c-7633725676873461003
2025-10-30T01:23:47.8534667Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-30T01:23:47.8535211Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-30T01:23:47.8535859Z         Detail: Cannot terminate cluster test-acc-tf-c-7633725676873461003 in project
2025-10-30T01:23:47.8536519Z         test-acc-tf-p-7494954675347226544 because it is undergoing a regional outage
2025-10-30T01:23:47.8537159Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-30T01:23:47.8537889Z         Request. Params: [test-acc-tf-c-7633725676873461003
2025-10-30T01:23:47.8538382Z         test-acc-tf-p-7494954675347226544], BadRequestDetail: 
2025-10-30T01:23:47.8538848Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (3346.91s)
```

- 2025-10-31 PASS 57 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 56 minutes
- 2025-11-04 PASS 58 minutes
- 2025-11-05
  - PASS 58 minutes
  - PASS 58 minutes
- 2025-11-06 PASS an hour
- 2025-11-07 PASS 58 minutes
- 2025-11-08 PASS an hour
- 2025-11-09: MISSING
- 2025-11-10 PASS 56 minutes
- 2025-11-11 PASS 57 minutes
- 2025-11-12 PASS 58 minutes
- 2025-11-13 PASS an hour
- 2025-11-14 PASS an hour
- 2025-11-15 PASS 57 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 59 minutes
- 2025-11-18 PASS 58 minutes
- 2025-11-19
  - PASS 58 minutes
  - FAIL 29 minutes

### Error 2025-11-19T09:29:36+00:00
```
2025-11-19T09:29:36.5882687Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-11-19T09:29:36.5887835Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-11-19T09:29:46.5920794Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-11-19T09:29:46.5923096Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:29:46.591760913Z, ProjectID: 691d8dfe5ab64e7c556718eb, Cluster name: test-acc-tf-c-4971587270556713175
2025-11-19T09:58:51.6065748Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-11-19T09:58:51.6066486Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-19T09:58:51.6066956Z         
2025-11-19T09:58:51.6067218Z         Error: Error in delete
2025-11-19T09:58:51.6067469Z         
2025-11-19T09:58:51.6067893Z         cluster name: test-acc-tf-c-4971587270556713175, API error details:
2025-11-19T09:58:51.6068760Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691d8dfe5ab64e7c556718eb/clusters/test-acc-tf-c-4971587270556713175
2025-11-19T09:58:51.6069414Z         DELETE: HTTP 400 Bad Request (Error code:
2025-11-19T09:58:51.6069938Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-11-19T09:58:51.6070781Z         Detail: Cannot terminate cluster test-acc-tf-c-4971587270556713175 in project
2025-11-19T09:58:51.6071455Z         test-acc-tf-p-7211179040513127604 because it is undergoing a regional outage
2025-11-19T09:58:51.6072080Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-11-19T09:58:51.6072593Z         Request. Params: [test-acc-tf-c-4971587270556713175
2025-11-19T09:58:51.6073059Z         test-acc-tf-p-7211179040513127604], BadRequestDetail: 
2025-11-19T09:58:51.6073513Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (1755.02s)
```

- 2025-11-20 PASS an hour
- 2025-11-21 PASS 56 minutes
- 2025-11-22 PASS 57 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 57 minutes
- 2025-11-25 PASS 59 minutes
- 2025-11-26 PASS 59 minutes
- 2025-11-27 PASS an hour

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 57 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 56 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 58 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 57 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 57 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
