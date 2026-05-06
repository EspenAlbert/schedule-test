# search_index/searchindex/TestAccSearchIndex_withNumPartitions Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters | dev | out_of_capacity | 0.08s
[2026-04-17 01:02](#error-2026-04-17t0102010000) |  | dev | timeout | 10871.01s
[2026-04-18 01:03](#error-2026-04-18t0103370000) |  | dev | timeout | 10871.06s
[2026-04-20 01:02](#error-2026-04-20t0102150000) |  | dev | timeout | 10868.01s
[2026-04-21 01:06](#error-2026-04-21t0106420000) |  | dev | timeout | 10871.10s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 10 minutes
- 2026-04-08 PASS 16 minutes
- 2026-04-09 PASS 20 minutes
- 2026-04-10 PASS 25 minutes
- 2026-04-11 PASS 11 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 21 minutes
- 2026-04-14 PASS 11 minutes
- 2026-04-15 PASS 16 minutes
- 2026-04-16

### Error 2026-04-16T00:50:45+00:00
```
2026-04-16T00:50:45.1478337Z === RUN   TestAccSearchIndex_withNumPartitions
2026-04-16T00:50:45.1479109Z     resource_search_index_test.go:198: Creating execution cluster: test-acc-tf-c-13896633757084246
2026-04-16T00:50:45.9686589Z     resource_search_index_test.go:198: 
2026-04-16T00:50:45.9688551Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:50:45.9690652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:50:45.9693000Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:198
2026-04-16T00:50:45.9694148Z         	Error:      	Received unexpected error:
2026-04-16T00:50:45.9697187Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:45.9698779Z         	Test:       	TestAccSearchIndex_withNumPartitions
2026-04-16T00:50:45.9701263Z         	Messages:   	Cluster creation failed: test-acc-tf-c-13896633757084246, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:45.9702963Z --- FAIL: TestAccSearchIndex_withNumPartitions (0.82s)
```

- 2026-04-17

### Error 2026-04-17T01:02:01+00:00
```
2026-04-17T01:02:01.2613836Z === RUN   TestAccSearchIndex_withNumPartitions
2026-04-17T04:03:12.3308504Z    test_working_directory=/tmp/plugintest1284135313 test_step_number=3 test_name=TestAccSearchIndex_withNumPartitions
2026-04-17T04:03:12.3312116Z     resource_search_index_test.go:201: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-17T04:03:12.3312855Z         
2026-04-17T04:03:12.3313394Z         Error: error during search deployment delete
2026-04-17T04:03:12.3313884Z         
2026-04-17T04:03:12.3314570Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-17T04:03:12.3315252Z         timeout: 3h0m0s)
2026-04-17T04:03:12.3315769Z --- FAIL: TestAccSearchIndex_withNumPartitions (10871.07s)
```

- 2026-04-18

### Error 2026-04-18T01:03:37+00:00
```
2026-04-18T01:03:37.2018442Z === RUN   TestAccSearchIndex_withNumPartitions
2026-04-18T04:04:48.7613802Z   
2026-04-18T04:04:48.7614913Z     resource_search_index_test.go:201: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-18T04:04:48.7615971Z         
2026-04-18T04:04:48.7616504Z         Error: error during search deployment delete
2026-04-18T04:04:48.7616920Z         
2026-04-18T04:04:48.7617713Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-18T04:04:48.7618476Z         timeout: 3h0m0s)
2026-04-18T04:04:48.7619011Z --- FAIL: TestAccSearchIndex_withNumPartitions (10871.56s)
```

- 2026-04-19: MISSING
- 2026-04-20

### Error 2026-04-20T01:02:15+00:00
```
2026-04-20T01:02:15.1565599Z === RUN   TestAccSearchIndex_withNumPartitions
2026-04-20T04:03:23.2610575Z    test_terraform_path=/home/runner/work/_temp/9c672eb2-8ab1-48bc-b085-7b9709821d0d/terraform test_working_directory=/tmp/plugintest1025736123 test_step_number=3
2026-04-20T04:03:23.2614364Z     resource_search_index_test.go:201: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-20T04:03:23.2614936Z         
2026-04-20T04:03:23.2615549Z         Error: error during search deployment delete
2026-04-20T04:03:23.2615998Z         
2026-04-20T04:03:23.2616456Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-20T04:03:23.2617009Z         timeout: 3h0m0s)
2026-04-20T04:03:23.2617327Z --- FAIL: TestAccSearchIndex_withNumPartitions (10868.10s)
```

- 2026-04-21

### Error 2026-04-21T01:06:42+00:00
```
2026-04-21T01:06:42.1692906Z === RUN   TestAccSearchIndex_withNumPartitions
2026-04-21T04:07:54.1337658Z    test_step_number=3 test_terraform_path=/home/runner/work/_temp/a638ee18-6306-48a5-9224-d365af3095aa/terraform
2026-04-21T04:07:54.1339117Z     resource_search_index_test.go:201: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-21T04:07:54.1339957Z         
2026-04-21T04:07:54.1340573Z         Error: error during search deployment delete
2026-04-21T04:07:54.1341423Z         
2026-04-21T04:07:54.1342041Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-21T04:07:54.1342655Z         timeout: 3h0m0s)
2026-04-21T04:07:54.1343034Z --- FAIL: TestAccSearchIndex_withNumPartitions (10871.96s)
```

- 2026-04-22 PASS 18 minutes
- 2026-04-23 PASS 21 minutes
- 2026-04-24 PASS 16 minutes
- 2026-04-25 PASS 14 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 19 minutes
- 2026-04-29 PASS 21 minutes
- 2026-04-30 PASS 20 minutes
- 2026-05-01 PASS 14 minutes
- 2026-05-02 PASS 12 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 16 minutes
- 2026-05-05 PASS 19 minutes
- 2026-05-06 PASS 25 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 14 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 12 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 13 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 11 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 14 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 13 minutes
- 2026-05-04 PASS 12 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 12 minutes
