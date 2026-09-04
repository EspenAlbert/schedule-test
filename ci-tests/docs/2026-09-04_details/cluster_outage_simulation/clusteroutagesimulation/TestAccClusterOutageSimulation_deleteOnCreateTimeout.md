# cluster_outage_simulation/clusteroutagesimulation/TestAccClusterOutageSimulation_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 01:46](#error-2026-08-27t0146590000) |  | dev | 1962.06s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS an hour
- 2026-08-07 PASS an hour
- 2026-08-08 PASS an hour
- 2026-08-09: MISSING
- 2026-08-10 PASS an hour
- 2026-08-11 PASS an hour
- 2026-08-12 PASS an hour
- 2026-08-13 PASS an hour
- 2026-08-14 PASS an hour
- 2026-08-15 PASS an hour
- 2026-08-16: MISSING
- 2026-08-17 PASS an hour
- 2026-08-18 PASS an hour
- 2026-08-19 PASS an hour
- 2026-08-20 PASS an hour
- 2026-08-21 PASS an hour
- 2026-08-22 PASS an hour
- 2026-08-23: MISSING
- 2026-08-24 PASS an hour
- 2026-08-25 PASS 59 minutes
- 2026-08-26 PASS 59 minutes
- 2026-08-27

### Error 2026-08-27T01:46:59+00:00
```
2026-08-27T01:46:59.7283965Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-27T01:46:59.7291241Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-27T01:47:04.7294593Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-27T01:47:04.7298452Z     pre_check.go:46: Time before creating cluster: 2026-08-27T01:47:04.729090016Z, ProjectID: 6a8f970f6af220b06a0f4efa, Cluster name: test-acc-tf-c-1250892548592678132
2026-08-27T02:19:42.2906528Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-27T02:19:42.2907302Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2026-08-27T02:19:42.2907815Z         
2026-08-27T02:19:42.2908114Z         Error: Error in delete
2026-08-27T02:19:42.2908403Z         
2026-08-27T02:19:42.2908859Z         cluster name: test-acc-tf-c-1250892548592678132, API error details:
2026-08-27T02:19:42.2909781Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f970f6af220b06a0f4efa/clusters/test-acc-tf-c-1250892548592678132
2026-08-27T02:19:42.2910479Z         DELETE: HTTP 400 Bad Request (Error code:
2026-08-27T02:19:42.2911054Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2026-08-27T02:19:42.2911749Z         Detail: Cannot terminate cluster test-acc-tf-c-1250892548592678132 in project
2026-08-27T02:19:42.2912448Z         test-acc-tf-p-3606200469368388475 because it is undergoing a regional outage
2026-08-27T02:19:42.2913117Z         simulation. End regional outage simulation and try again. Reason: Bad
2026-08-27T02:19:42.2913681Z         Request. Params: [test-acc-tf-c-1250892548592678132
2026-08-27T02:19:42.2914197Z         test-acc-tf-p-3606200469368388475], BadRequestDetail: 
2026-08-27T02:19:42.2914693Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (1962.56s)
```

- 2026-08-28 PASS an hour
- 2026-08-29 PASS an hour
- 2026-08-30: MISSING
- 2026-08-31 PASS an hour
- 2026-09-01 PASS an hour
- 2026-09-02 PASS an hour
- 2026-09-03 PASS an hour
- 2026-09-04 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-09 00:27](#error-2026-08-09t0027060000) |  | qa | 2092.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09

### Error 2026-08-09T00:27:06+00:00
```
2026-08-09T00:27:06.9686892Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-09T00:27:06.9691532Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-09T00:27:21.9760115Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-09T00:27:21.9761267Z     pre_check.go:46: Time before creating cluster: 2026-08-09T00:27:21.975646493Z, ProjectID: 6a77c959a8828b5d588cda41, Cluster name: test-acc-tf-c-8277708902025372507
2026-08-09T01:01:59.1023804Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-09T01:01:59.1024638Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2026-08-09T01:01:59.1025174Z         
2026-08-09T01:01:59.1025458Z         Error: Error in delete
2026-08-09T01:01:59.1025734Z         
2026-08-09T01:01:59.1026184Z         cluster name: test-acc-tf-c-8277708902025372507, API error details:
2026-08-09T01:01:59.1027091Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a77c959a8828b5d588cda41/clusters/test-acc-tf-c-8277708902025372507
2026-08-09T01:01:59.1027769Z         DELETE: HTTP 400 Bad Request (Error code:
2026-08-09T01:01:59.1028333Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2026-08-09T01:01:59.1029299Z         Detail: Cannot terminate cluster test-acc-tf-c-8277708902025372507 in project
2026-08-09T01:01:59.1030002Z         test-acc-tf-p-7689384821652725091 because it is undergoing a regional outage
2026-08-09T01:01:59.1030663Z         simulation. End regional outage simulation and try again. Reason: Bad
2026-08-09T01:01:59.1031220Z         Request. Params: [test-acc-tf-c-8277708902025372507
2026-08-09T01:01:59.1031735Z         test-acc-tf-p-7689384821652725091], BadRequestDetail: 
2026-08-09T01:01:59.1032417Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (2092.13s)
```

- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS an hour
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS an hour
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS an hour
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS an hour
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS an hour
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
