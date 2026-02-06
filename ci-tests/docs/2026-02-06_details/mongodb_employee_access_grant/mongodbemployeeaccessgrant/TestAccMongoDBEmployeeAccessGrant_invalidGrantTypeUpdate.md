# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) TIMEOUT FAIL
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 04:35](#error-2026-01-31t0435130000) |  | dev |  | 212454.00s
[2026-02-03 00:39](#error-2026-02-03t0039220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee995902674/clusters | dev | out_of_capacity | 0.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 seconds
- 2026-01-09 PASS 2 seconds
- 2026-01-10 PASS 2 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS a second
- 2026-01-13 PASS 2 seconds
- 2026-01-14 PASS 2 seconds
- 2026-01-15 PASS 3 seconds
- 2026-01-16 PASS 2 seconds
- 2026-01-17 PASS 2 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 2 seconds
- 2026-01-20 PASS 3 seconds
- 2026-01-21 PASS 2 seconds
- 2026-01-22 PASS 2 seconds
- 2026-01-23 PASS 3 seconds
- 2026-01-24 PASS 2 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 2 seconds
- 2026-01-27 PASS 3 seconds
- 2026-01-28 PASS 3 seconds
- 2026-01-29 PASS 3 seconds
- 2026-01-30 PASS 2 seconds
- 2026-01-31

### Error 2026-01-31T04:35:13+00:00
```
2026-01-31T04:35:13.5494155Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate
2026-01-31T04:35:13.5494781Z     resource_test.go:115: Creating execution cluster: test-acc-tf-c-2045024506001986366
2026-01-31T04:35:14.6436466Z 2026/01/31 04:35:14 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T04:38:15.0080253Z 2026/01/31 04:38:15 [TRACE] Waiting 1m0s before next try
2026-01-31T04:39:15.4691376Z 2026/01/31 04:39:15 [TRACE] Waiting 10s before next try
2026-01-31T04:39:25.7172318Z 2026/01/31 04:39:25 [TRACE] Waiting 1m0s before next try
2026-01-31T04:40:26.1778338Z 2026/01/31 04:40:26 [TRACE] Waiting 10s before next try
2026-01-31T04:40:36.4177146Z 2026/01/31 04:40:36 [TRACE] Waiting 1m0s before next try
2026-01-31T04:41:36.7553593Z 2026/01/31 04:41:36 [TRACE] Waiting 10s before next try
2026-01-31T04:41:47.0110893Z 2026/01/31 04:41:47 [TRACE] Waiting 1m0s before next try
2026-01-31T04:42:47.3742309Z 2026/01/31 04:42:47 [TRACE] Waiting 10s before next try
2026-01-31T04:42:57.5906584Z 2026/01/31 04:42:57 [TRACE] Waiting 1m0s before next try
2026-01-31T04:43:57.9544925Z 2026/01/31 04:43:57 [TRACE] Waiting 10s before next try
2026-01-31T04:44:08.2086177Z 2026/01/31 04:44:08 [TRACE] Waiting 1m0s before next try
2026-01-31T04:45:08.5597740Z 2026/01/31 04:45:08 [TRACE] Waiting 10s before next try
2026-01-31T04:45:18.8120421Z 2026/01/31 04:45:18 [TRACE] Waiting 1m0s before next try
2026-01-31T04:46:19.1748106Z 2026/01/31 04:46:19 [TRACE] Waiting 10s before next try
2026-01-31T04:46:29.3968546Z 2026/01/31 04:46:29 [TRACE] Waiting 1m0s before next try
2026-01-31T04:47:30.0095552Z 2026/01/31 04:47:30 [TRACE] Waiting 10s before next try
2026-01-31T04:47:40.2454167Z 2026/01/31 04:47:40 [TRACE] Waiting 1m0s before next try
2026-01-31T04:48:40.6082747Z 2026/01/31 04:48:40 [TRACE] Waiting 10s before next try
2026-01-31T04:48:50.8370389Z 2026/01/31 04:48:50 [TRACE] Waiting 1m0s before next try
2026-01-31T04:49:51.1907532Z 2026/01/31 04:49:51 [TRACE] Waiting 10s before next try
2026-01-31T04:50:01.4386321Z 2026/01/31 04:50:01 [TRACE] Waiting 1m0s before next try
2026-01-31T04:51:01.7845781Z 2026/01/31 04:51:01 [TRACE] Waiting 10s before next try
2026-01-31T04:51:12.0167858Z 2026/01/31 04:51:12 [TRACE] Waiting 1m0s before next try
2026-01-31T04:52:12.4182468Z 2026/01/31 04:52:12 [TRACE] Waiting 10s before next try
2026-01-31T04:52:22.6605953Z 2026/01/31 04:52:22 [TRACE] Waiting 1m0s before next try
2026-01-31T04:53:23.0155496Z 2026/01/31 04:53:23 [TRACE] Waiting 10s before next try
2026-01-31T04:53:33.2677778Z 2026/01/31 04:53:33 [TRACE] Waiting 1m0s before next try
2026-01-31T04:54:33.6901990Z 2026/01/31 04:54:33 [TRACE] Waiting 10s before next try
2026-01-31T04:54:43.9387121Z 2026/01/31 04:54:43 [TRACE] Waiting 1m0s before next try
2026-01-31T04:55:44.3057675Z 2026/01/31 04:55:44 [TRACE] Waiting 10s before next try
2026-01-31T04:55:54.5461056Z 2026/01/31 04:55:54 [TRACE] Waiting 1m0s before next try
2026-01-31T04:56:55.0187988Z 2026/01/31 04:56:55 [TRACE] Waiting 10s before next try
2026-01-31T04:57:05.3152140Z 2026/01/31 04:57:05 [TRACE] Waiting 1m0s before next try
2026-01-31T04:58:05.6659009Z 2026/01/31 04:58:05 [TRACE] Waiting 10s before next try
2026-01-31T04:58:15.9000644Z 2026/01/31 04:58:15 [TRACE] Waiting 1m0s before next try
2026-01-31T04:59:16.2826815Z 2026/01/31 04:59:16 [TRACE] Waiting 10s before next try
2026-01-31T04:59:26.5378961Z 2026/01/31 04:59:26 [TRACE] Waiting 1m0s before next try
2026-01-31T05:00:26.9522312Z 2026/01/31 05:00:26 [TRACE] Waiting 10s before next try
2026-01-31T05:00:37.1775132Z 2026/01/31 05:00:37 [TRACE] Waiting 1m0s before next try
2026-01-31T05:01:37.5659384Z 2026/01/31 05:01:37 [TRACE] Waiting 10s before next try
2026-01-31T05:01:47.7963866Z 2026/01/31 05:01:47 [TRACE] Waiting 1m0s before next try
2026-01-31T05:02:48.1805203Z 2026/01/31 05:02:48 [TRACE] Waiting 10s before next try
2026-01-31T05:02:58.4187075Z 2026/01/31 05:02:58 [TRACE] Waiting 1m0s before next try
2026-01-31T05:03:58.8027043Z 2026/01/31 05:03:58 [TRACE] Waiting 10s before next try
2026-01-31T05:04:09.0278780Z 2026/01/31 05:04:09 [TRACE] Waiting 1m0s before next try
2026-01-31T05:05:09.4152597Z 2026/01/31 05:05:09 [TRACE] Waiting 10s before next try
2026-01-31T05:05:19.6347135Z 2026/01/31 05:05:19 [TRACE] Waiting 1m0s before next try
2026-01-31T05:06:20.0115110Z 2026/01/31 05:06:20 [TRACE] Waiting 10s before next try
2026-01-31T05:06:30.2503960Z 2026/01/31 05:06:30 [TRACE] Waiting 1m0s before next try
2026-01-31T05:07:30.5891332Z 2026/01/31 05:07:30 [TRACE] Waiting 10s before next try
2026-01-31T05:07:40.8257997Z 2026/01/31 05:07:40 [TRACE] Waiting 1m0s before next try
2026-01-31T05:08:41.2599242Z 2026/01/31 05:08:41 [TRACE] Waiting 10s before next try
2026-01-31T05:08:51.5075137Z 2026/01/31 05:08:51 [TRACE] Waiting 1m0s before next try
2026-01-31T05:09:51.9647482Z 2026/01/31 05:09:51 [TRACE] Waiting 10s before next try
2026-01-31T05:10:02.1945143Z 2026/01/31 05:10:02 [TRACE] Waiting 1m0s before next try
2026-01-31T05:11:02.5806605Z 2026/01/31 05:11:02 [TRACE] Waiting 10s before next try
2026-01-31T05:11:12.8100166Z 2026/01/31 05:11:12 [TRACE] Waiting 1m0s before next try
2026-01-31T05:12:13.2335382Z 2026/01/31 05:12:13 [TRACE] Waiting 10s before next try
2026-01-31T05:12:23.4672758Z 2026/01/31 05:12:23 [TRACE] Waiting 1m0s before next try
2026-01-31T05:13:23.9231395Z 2026/01/31 05:13:23 [TRACE] Waiting 10s before next try
2026-01-31T05:13:34.1539624Z 2026/01/31 05:13:34 [TRACE] Waiting 1m0s before next try
2026-01-31T05:14:34.5403257Z 2026/01/31 05:14:34 [TRACE] Waiting 10s before next try
2026-01-31T05:14:45.4454927Z 2026/01/31 05:14:45 [TRACE] Waiting 1m0s before next try
2026-01-31T05:15:45.8514615Z 2026/01/31 05:15:45 [TRACE] Waiting 10s before next try
2026-01-31T05:15:56.0742558Z 2026/01/31 05:15:56 [TRACE] Waiting 1m0s before next try
2026-01-31T05:16:56.4325644Z 2026/01/31 05:16:56 [TRACE] Waiting 10s before next try
2026-01-31T05:17:06.6638581Z 2026/01/31 05:17:06 [TRACE] Waiting 1m0s before next try
2026-01-31T05:18:07.0665318Z 2026/01/31 05:18:07 [TRACE] Waiting 10s before next try
2026-01-31T05:18:17.2880599Z 2026/01/31 05:18:17 [TRACE] Waiting 1m0s before next try
2026-01-31T05:19:17.6791308Z 2026/01/31 05:19:17 [TRACE] Waiting 10s before next try
2026-01-31T05:19:27.9482762Z 2026/01/31 05:19:27 [TRACE] Waiting 1m0s before next try
2026-01-31T05:20:28.3213961Z 2026/01/31 05:20:28 [TRACE] Waiting 10s before next try
2026-01-31T05:20:38.5482101Z 2026/01/31 05:20:38 [TRACE] Waiting 1m0s before next try
2026-01-31T05:21:38.9461541Z 2026/01/31 05:21:38 [TRACE] Waiting 10s before next try
2026-01-31T05:21:49.1824300Z 2026/01/31 05:21:49 [TRACE] Waiting 1m0s before next try
2026-01-31T05:22:49.5598825Z 2026/01/31 05:22:49 [TRACE] Waiting 10s before next try
2026-01-31T05:22:59.8180657Z 2026/01/31 05:22:59 [TRACE] Waiting 1m0s before next try
2026-01-31T05:24:00.2256854Z 2026/01/31 05:24:00 [TRACE] Waiting 10s before next try
2026-01-31T05:24:10.4869619Z 2026/01/31 05:24:10 [TRACE] Waiting 1m0s before next try
2026-01-31T05:25:10.8890105Z 2026/01/31 05:25:10 [TRACE] Waiting 10s before next try
2026-01-31T05:25:21.1411110Z 2026/01/31 05:25:21 [TRACE] Waiting 1m0s before next try
2026-01-31T05:26:21.5281439Z 2026/01/31 05:26:21 [TRACE] Waiting 10s before next try
2026-01-31T05:26:31.7520371Z 2026/01/31 05:26:31 [TRACE] Waiting 1m0s before next try
2026-01-31T05:27:32.1221083Z 2026/01/31 05:27:32 [TRACE] Waiting 10s before next try
2026-01-31T05:27:42.3647158Z 2026/01/31 05:27:42 [TRACE] Waiting 1m0s before next try
2026-01-31T05:28:42.7057760Z 2026/01/31 05:28:42 [TRACE] Waiting 10s before next try
2026-01-31T05:28:52.9536016Z 2026/01/31 05:28:52 [TRACE] Waiting 1m0s before next try
2026-01-31T05:29:53.3209313Z 2026/01/31 05:29:53 [TRACE] Waiting 10s before next try
2026-01-31T05:30:03.5648347Z 2026/01/31 05:30:03 [TRACE] Waiting 1m0s before next try
2026-01-31T05:31:03.9404970Z 2026/01/31 05:31:03 [TRACE] Waiting 10s before next try
2026-01-31T05:31:14.1946865Z 2026/01/31 05:31:14 [TRACE] Waiting 1m0s before next try
2026-01-31T05:32:14.5972718Z 2026/01/31 05:32:14 [TRACE] Waiting 10s before next try
2026-01-31T05:32:24.8293890Z 2026/01/31 05:32:24 [TRACE] Waiting 1m0s before next try
2026-01-31T05:33:25.2574840Z 2026/01/31 05:33:25 [TRACE] Waiting 10s before next try
2026-01-31T05:33:35.4898387Z 2026/01/31 05:33:35 [TRACE] Waiting 1m0s before next try
2026-01-31T05:34:35.8997326Z 2026/01/31 05:34:35 [TRACE] Waiting 10s before next try
2026-01-31T05:34:46.1284017Z 2026/01/31 05:34:46 [TRACE] Waiting 1m0s before next try
2026-01-31T05:35:07.9760095Z panic: test timed out after 5h0m0s
2026-01-31T05:35:07.9760751Z 	running tests:
2026-01-31T05:35:07.9760095Z panic: test timed out after 5h0m0s
2026-01-31T05:35:07.9760751Z 	running tests:
2026-01-31T05:35:07.9761575Z 		TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate (59m54s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:22+00:00
```
2026-02-03T00:39:22.9071995Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate
2026-02-03T00:39:22.9072625Z     resource_test.go:115: Creating execution cluster: test-acc-tf-c-8952567401372648526
2026-02-03T00:39:23.4373324Z     resource_test.go:115: 
2026-02-03T00:39:23.4375449Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:23.4378079Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:23.4380616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:115
2026-02-03T00:39:23.4381647Z         	Error:      	Received unexpected error:
2026-02-03T00:39:23.4384946Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee995902674/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:23.4386993Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate
2026-02-03T00:39:23.4389564Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8952567401372648526, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee995902674/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:23.4391054Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate (0.53s)
```

- 2026-02-04 PASS 2 seconds
- 2026-02-05 PASS 2 seconds
- 2026-02-06 PASS 2 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 2 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 2 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 2 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS a second
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 2 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
