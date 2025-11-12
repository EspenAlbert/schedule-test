# cluster_outage_simulation/clusteroutagesimulation/TestAccClusterOutageSimulation_deleteOnCreateTimeout Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 36) FAIL(x 6)
Success rate: 85.71%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-06 00:28](#error-2025-10-06t0028030000) |  | dev | 3230.07s
[2025-10-09 00:27](#error-2025-10-09t0027070000) |  | dev | 3657.04s
[2025-10-12 00:28](#error-2025-10-12t0028420000) |  | qa | 2860.01s
[2025-10-15 00:28](#error-2025-10-15t0028130000) |  | dev | 1812.05s
[2025-10-27 00:30](#error-2025-10-27t0030200000) |  | dev | 2327.05s
[2025-10-30 00:28](#error-2025-10-30t0028000000) |  | dev | 3346.09s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS an hour
- 2025-10-05 PASS 56 minutes
- 2025-10-06

### Error 2025-10-06T00:28:03+00:00
```
2025-10-06T00:28:03.6636215Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-06T00:28:03.6642523Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-06T00:28:18.6703254Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-06T00:28:18.6704461Z     pre_check.go:36: Time before creating cluster: 2025-10-06T00:28:18.6700208Z, ProjectID: 68e30d112a8cab75bf413dd3, Cluster name: test-acc-tf-c-7939381243456723244
2025-10-06T01:21:54.3504714Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-06T01:21:54.3505406Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-06T01:21:54.3505867Z         
2025-10-06T01:21:54.3506131Z         Error: Error in delete
2025-10-06T01:21:54.3506373Z         
2025-10-06T01:21:54.3506785Z         cluster name: test-acc-tf-c-7939381243456723244, API error details:
2025-10-06T01:21:54.3508037Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e30d112a8cab75bf413dd3/clusters/test-acc-tf-c-7939381243456723244
2025-10-06T01:21:54.3508716Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-06T01:21:54.3509252Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-06T01:21:54.3509895Z         Detail: Cannot terminate cluster test-acc-tf-c-7939381243456723244 in project
2025-10-06T01:21:54.3510550Z         test-acc-tf-p-3218593415932111631 because it is undergoing a regional outage
2025-10-06T01:21:54.3511171Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-06T01:21:54.3511692Z         Request. Params: [test-acc-tf-c-7939381243456723244
2025-10-06T01:21:54.3512158Z         test-acc-tf-p-3218593415932111631], BadRequestDetail: 
2025-10-06T01:21:54.3512624Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (3230.69s)
```

- 2025-10-07 PASS an hour
- 2025-10-08 PASS 59 minutes
- 2025-10-09

### Error 2025-10-09T00:27:07+00:00
```
2025-10-09T00:27:07.7357969Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-09T00:27:07.7363483Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-09T00:27:22.7463840Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-09T00:27:22.7465527Z     pre_check.go:36: Time before creating cluster: 2025-10-09T00:27:22.746112279Z, ProjectID: 68e70159c2a3cd169303e70d, Cluster name: test-acc-tf-c-4315945260451812120
2025-10-09T01:28:05.0932767Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-09T01:28:05.0933439Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-09T01:28:05.0933894Z         
2025-10-09T01:28:05.0934141Z         Error: Error in delete
2025-10-09T01:28:05.0934373Z         
2025-10-09T01:28:05.0935011Z         cluster name: test-acc-tf-c-4315945260451812120, API error details:
2025-10-09T01:28:05.0935884Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70159c2a3cd169303e70d/clusters/test-acc-tf-c-4315945260451812120
2025-10-09T01:28:05.0936785Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-09T01:28:05.0937470Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-09T01:28:05.0938095Z         Detail: Cannot terminate cluster test-acc-tf-c-4315945260451812120 in project
2025-10-09T01:28:05.0938732Z         test-acc-tf-p-1460378166713015499 because it is undergoing a regional outage
2025-10-09T01:28:05.0939337Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-09T01:28:05.0939834Z         Request. Params: [test-acc-tf-c-4315945260451812120
2025-10-09T01:28:05.0940298Z         test-acc-tf-p-1460378166713015499], BadRequestDetail: 
2025-10-09T01:28:05.0940733Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (3657.36s)
```

- 2025-10-10 PASS an hour
- 2025-10-11 PASS an hour
- 2025-10-12

### Error 2025-10-12T00:28:42+00:00
```
2025-10-12T00:28:42.5490348Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-12T00:28:42.5498107Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-12T00:29:07.5598334Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-12T00:29:07.5602245Z     pre_check.go:36: Time before creating cluster: 2025-10-12T00:29:07.559534991Z, ProjectID: 68eaf639454e3b49aeac0648, Cluster name: test-acc-tf-c-1164869619792581889
2025-10-12T01:16:22.2965198Z   diagnostic_summary=
2025-10-12T01:16:22.2969733Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_req_id=b13f8503-9290-0171-9f7e-d2bbb7c397d2 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_cluster_outage_simulation diagnostic_detail="" diagnostic_severity=ERROR
2025-10-12T01:16:22.6700979Z    test_terraform_path=/home/runner/work/_temp/4a3f902e-2f65-437b-ab66-c0c026e05d66/terraform test_working_directory=/tmp/plugintest3574554401 test_step_number=1 test_name=TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-12T01:16:22.6702191Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-12T01:16:22.6702657Z         
2025-10-12T01:16:22.6702911Z         Error: Error in delete
2025-10-12T01:16:22.6703153Z         
2025-10-12T01:16:22.6703557Z         cluster name: test-acc-tf-c-1164869619792581889, API error details:
2025-10-12T01:16:22.6704622Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf639454e3b49aeac0648/clusters/test-acc-tf-c-1164869619792581889
2025-10-12T01:16:22.6705285Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-12T01:16:22.6705796Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-12T01:16:22.6706422Z         Detail: Cannot terminate cluster test-acc-tf-c-1164869619792581889 in project
2025-10-12T01:16:22.6707075Z         test-acc-tf-p-4024986377574999456 because it is undergoing a regional outage
2025-10-12T01:16:22.6707700Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-12T01:16:22.6708206Z         Request. Params: [test-acc-tf-c-1164869619792581889
2025-10-12T01:16:22.6708665Z         test-acc-tf-p-4024986377574999456], BadRequestDetail: 
2025-10-12T01:16:22.6709118Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (2860.12s)
```

- 2025-10-13 PASS an hour
- 2025-10-14 PASS 58 minutes
- 2025-10-15

### Error 2025-10-15T00:28:13+00:00
```
2025-10-15T00:28:13.4721947Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-15T00:28:13.4729764Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-15T00:28:18.4769676Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-15T00:28:18.4773745Z     pre_check.go:36: Time before creating cluster: 2025-10-15T00:28:18.476640511Z, ProjectID: 68eeea99be088e40ea2cb35f, Cluster name: test-acc-tf-c-8870920327933784618
2025-10-15T00:58:25.9701854Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-15T00:58:25.9702549Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-15T00:58:25.9703023Z         
2025-10-15T00:58:25.9703282Z         Error: Error in delete
2025-10-15T00:58:25.9703531Z         
2025-10-15T00:58:25.9703952Z         cluster name: test-acc-tf-c-8870920327933784618, API error details:
2025-10-15T00:58:25.9704834Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68eeea99be088e40ea2cb35f/clusters/test-acc-tf-c-8870920327933784618
2025-10-15T00:58:25.9705495Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-15T00:58:25.9706022Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-15T00:58:25.9706680Z         Detail: Cannot terminate cluster test-acc-tf-c-8870920327933784618 in project
2025-10-15T00:58:25.9707348Z         test-acc-tf-p-2961577633976498627 because it is undergoing a regional outage
2025-10-15T00:58:25.9707971Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-15T00:58:25.9708481Z         Request. Params: [test-acc-tf-c-8870920327933784618
2025-10-15T00:58:25.9708958Z         test-acc-tf-p-2961577633976498627], BadRequestDetail: 
2025-10-15T00:58:25.9709411Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (1812.50s)
```

- 2025-10-16 PASS an hour
- 2025-10-17 PASS 59 minutes
- 2025-10-18 PASS 57 minutes
- 2025-10-19 PASS 58 minutes
- 2025-10-20
  - PASS an hour
  - PASS 57 minutes
- 2025-10-21 PASS 57 minutes
- 2025-10-22
  - PASS an hour
  - PASS 57 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS 59 minutes
- 2025-10-25 PASS 57 minutes
- 2025-10-26 PASS 56 minutes
- 2025-10-27

### Error 2025-10-27T00:30:20+00:00
```
2025-10-27T00:30:20.4192765Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-27T00:30:20.4198215Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-27T00:30:25.4239507Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-27T00:30:25.4243634Z     pre_check.go:36: Time before creating cluster: 2025-10-27T00:30:25.423629113Z, ProjectID: 68febd1a5c665f6c63cf15aa, Cluster name: test-acc-tf-c-3198560134310842638
2025-10-27T01:09:07.9547848Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2025-10-27T01:09:07.9548475Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-27T01:09:07.9548885Z         
2025-10-27T01:09:07.9549126Z         Error: Error in delete
2025-10-27T01:09:07.9549359Z         
2025-10-27T01:09:07.9549743Z         cluster name: test-acc-tf-c-3198560134310842638, API error details:
2025-10-27T01:09:07.9550509Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd1a5c665f6c63cf15aa/clusters/test-acc-tf-c-3198560134310842638
2025-10-27T01:09:07.9551106Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-27T01:09:07.9551586Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2025-10-27T01:09:07.9552166Z         Detail: Cannot terminate cluster test-acc-tf-c-3198560134310842638 in project
2025-10-27T01:09:07.9552890Z         test-acc-tf-p-5210838568800786101 because it is undergoing a regional outage
2025-10-27T01:09:07.9553458Z         simulation. End regional outage simulation and try again. Reason: Bad
2025-10-27T01:09:07.9553932Z         Request. Params: [test-acc-tf-c-3198560134310842638
2025-10-27T01:09:07.9554361Z         test-acc-tf-p-5210838568800786101], BadRequestDetail: 
2025-10-27T01:09:07.9554808Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (2327.53s)
```

- 2025-10-28 PASS 57 minutes
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
- 2025-11-02 PASS 57 minutes
- 2025-11-03 PASS 56 minutes
- 2025-11-04 PASS 58 minutes
- 2025-11-05
  - PASS 58 minutes
  - PASS 58 minutes
- 2025-11-06 PASS an hour
- 2025-11-07 PASS 58 minutes
- 2025-11-08 PASS an hour
- 2025-11-09 PASS 56 minutes
- 2025-11-10 PASS 56 minutes
- 2025-11-11 PASS 57 minutes
- 2025-11-12 PASS 58 minutes