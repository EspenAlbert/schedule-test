# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 20) FAIL(x 11)
Success rate: 64.52%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 09:39](#error-2026-05-07t0939520000) | NO_CAPACITY /api/atlas/v2/groups/69fc5c712f0288ef643f0d6d/containers | dev |  | 9.00s
[2026-05-09 01:03](#error-2026-05-09t0103400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 459.02s
[2026-05-16 01:01](#error-2026-05-16t0101160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 258.04s
[2026-05-19 01:08](#error-2026-05-19t0108530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.00s
[2026-05-21 01:09](#error-2026-05-21t0109200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.07s
[2026-05-23 01:05](#error-2026-05-23t0105240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 212.02s
[2026-05-26 02:14](#error-2026-05-26t0214440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.02s
[2026-05-28 01:03](#error-2026-05-28t0103330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.06s
[2026-06-01 01:21](#error-2026-06-01t0121380000) | NO_CAPACITY /api/atlas/v2/groups/6a1cdba6adbc612d01a2805b/containers | dev |  | 8.04s
[2026-06-02 01:13](#error-2026-06-02t0113230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.10s
[2026-06-05 01:16](#error-2026-06-05t0116170000) | NO_CAPACITY /api/atlas/v2/groups/6a2220e7770de8903f192317/containers | dev |  | 7.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 4 minutes
  - FAIL 9 seconds

### Error 2026-05-07T09:39:52+00:00
```
2026-05-07T09:39:52.3457938Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-07T09:39:52.3462649Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-07T09:39:52.3509305Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-07T09:39:52.3510077Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-07T09:39:52.3510621Z         
2026-05-07T09:39:52.3512592Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fc5c712f0288ef643f0d6d/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69fc5c712f0288ef643f0d6d. Reason: Conflict. Params: [AZURE 69fc5c712f0288ef643f0d6d], BadRequestDetail: 
2026-05-07T09:39:52.3513977Z         
2026-05-07T09:39:52.3514362Z           with mongodbatlas_network_container.first,
2026-05-07T09:39:52.3515315Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-05-07T09:39:52.3516012Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-05-07T09:39:52.3516378Z         
2026-05-07T09:39:52.3518548Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fc5c71f696c64139d0913d/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69fc5c71f696c64139d0913d. Reason: Conflict. Params: [AZURE 69fc5c71f696c64139d0913d], BadRequestDetail: 
2026-05-07T09:39:52.3519918Z         
2026-05-07T09:39:52.3520300Z           with mongodbatlas_network_container.second,
2026-05-07T09:39:52.3521169Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-05-07T09:39:52.3521877Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-05-07T09:39:52.3522239Z         
2026-05-07T09:39:52.3522599Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (9.00s)
```

- 2026-05-08 PASS 8 minutes
- 2026-05-09

### Error 2026-05-09T01:03:40+00:00
```
2026-05-09T01:03:40.8357509Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-09T01:03:40.8365604Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-09T01:03:40.8380491Z   
2026-05-09T01:03:40.8451523Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-09T01:03:40.8452665Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-09T01:03:40.8454035Z         
2026-05-09T01:03:40.8454872Z         Error: error creating project: test-acc-tf-p-9108592116720505234
2026-05-09T01:03:40.8455555Z         
2026-05-09T01:03:40.8456025Z           with mongodbatlas_project.first,
2026-05-09T01:03:40.8456878Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-05-09T01:03:40.8457839Z           13: 		resource "mongodbatlas_project" "first" {
2026-05-09T01:03:40.8458207Z         
2026-05-09T01:03:40.8458721Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:03:40.8459424Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:03:40.8460055Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:03:40.8460575Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (459.16s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 minutes
- 2026-05-12 PASS 4 minutes
- 2026-05-13 PASS 8 minutes
- 2026-05-14 PASS 3 minutes
- 2026-05-15 PASS 3 minutes
- 2026-05-16

### Error 2026-05-16T01:01:16+00:00
```
2026-05-16T01:01:16.0180980Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-16T01:01:16.0186372Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-16T01:01:16.0245389Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-16T01:01:16.0247038Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-16T01:01:16.0248127Z         
2026-05-16T01:01:16.0249299Z         Error: error creating project: test-acc-tf-p-2224592479048556322
2026-05-16T01:01:16.0250088Z         
2026-05-16T01:01:16.0250728Z           with mongodbatlas_project.second,
2026-05-16T01:01:16.0251653Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-05-16T01:01:16.0252319Z           36: 		resource "mongodbatlas_project" "second" {
2026-05-16T01:01:16.0252676Z         
2026-05-16T01:01:16.0253196Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:01:16.0253906Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:01:16.0254546Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:01:16.0255669Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (258.41s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 3 minutes
- 2026-05-19

### Error 2026-05-19T01:08:53+00:00
```
2026-05-19T01:08:53.2984977Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-19T01:08:53.2992716Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-19T01:08:53.3038441Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-19T01:08:53.3039330Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-19T01:08:53.3039883Z         
2026-05-19T01:08:53.3040340Z         Error: error creating project: test-acc-tf-p-2831373193370175882
2026-05-19T01:08:53.3040744Z         
2026-05-19T01:08:53.3041084Z           with mongodbatlas_project.first,
2026-05-19T01:08:53.3041738Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-05-19T01:08:53.3042363Z           13: 		resource "mongodbatlas_project" "first" {
2026-05-19T01:08:53.3042708Z         
2026-05-19T01:08:53.3043225Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:53.3043914Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:53.3044554Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:53.3044954Z         
2026-05-19T01:08:53.3045398Z         Error: error creating project: test-acc-tf-p-389617832032119144
2026-05-19T01:08:53.3045794Z         
2026-05-19T01:08:53.3046254Z           with mongodbatlas_project.second,
2026-05-19T01:08:53.3046923Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-05-19T01:08:53.3047559Z           36: 		resource "mongodbatlas_project" "second" {
2026-05-19T01:08:53.3047900Z         
2026-05-19T01:08:53.3048396Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:53.3049083Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:53.3049710Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:53.3050227Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (107.02s)
```

- 2026-05-20 PASS 2 minutes
- 2026-05-21

### Error 2026-05-21T01:09:20+00:00
```
2026-05-21T01:09:20.3275287Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-21T01:09:20.3280094Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-21T01:09:20.3340138Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-21T01:09:20.3340906Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-21T01:09:20.3341436Z         
2026-05-21T01:09:20.3341898Z         Error: error creating project: test-acc-tf-p-4026284292082464638
2026-05-21T01:09:20.3342293Z         
2026-05-21T01:09:20.3342632Z           with mongodbatlas_project.first,
2026-05-21T01:09:20.3343289Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-05-21T01:09:20.3343906Z           13: 		resource "mongodbatlas_project" "first" {
2026-05-21T01:09:20.3344371Z         
2026-05-21T01:09:20.3344928Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:09:20.3345619Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:09:20.3346246Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:20.3346629Z         
2026-05-21T01:09:20.3347189Z         Error: error creating project: test-acc-tf-p-1932969915189159886
2026-05-21T01:09:20.3347585Z         
2026-05-21T01:09:20.3347932Z           with mongodbatlas_project.second,
2026-05-21T01:09:20.3348600Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-05-21T01:09:20.3349227Z           36: 		resource "mongodbatlas_project" "second" {
2026-05-21T01:09:20.3349566Z         
2026-05-21T01:09:20.3350062Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:09:20.3350915Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:09:20.3351557Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:20.3352071Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (69.66s)
```

- 2026-05-22 PASS 8 minutes
- 2026-05-23

### Error 2026-05-23T01:05:24+00:00
```
2026-05-23T01:05:24.4081696Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-23T01:05:24.4086764Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-23T01:05:24.4106138Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-23T01:05:24.4106942Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-23T01:05:24.4107679Z         
2026-05-23T01:05:24.4108185Z         Error: error creating project: test-acc-tf-p-2401795519397750608
2026-05-23T01:05:24.4108618Z         
2026-05-23T01:05:24.4108989Z           with mongodbatlas_project.second,
2026-05-23T01:05:24.4109689Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-05-23T01:05:24.4110346Z           36: 		resource "mongodbatlas_project" "second" {
2026-05-23T01:05:24.4110703Z         
2026-05-23T01:05:24.4111236Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:05:24.4111951Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:05:24.4112604Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:24.4124764Z   
2026-05-23T01:05:24.4151927Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (212.23s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 2 minutes
- 2026-05-26

### Error 2026-05-26T02:14:44+00:00
```
2026-05-26T02:14:44.2238353Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-26T02:14:44.2243057Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-26T02:14:44.2296710Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-26T02:14:44.2297387Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-26T02:14:44.2297870Z         
2026-05-26T02:14:44.2298291Z         Error: error creating project: test-acc-tf-p-8326612250796206886
2026-05-26T02:14:44.2298655Z         
2026-05-26T02:14:44.2298975Z           with mongodbatlas_project.first,
2026-05-26T02:14:44.2299565Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-05-26T02:14:44.2300126Z           13: 		resource "mongodbatlas_project" "first" {
2026-05-26T02:14:44.2300565Z         
2026-05-26T02:14:44.2301064Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:14:44.2301688Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:14:44.2302256Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:44.2302614Z         
2026-05-26T02:14:44.2303039Z         Error: error creating project: test-acc-tf-p-6422880457630615203
2026-05-26T02:14:44.2303398Z         
2026-05-26T02:14:44.2303719Z           with mongodbatlas_project.second,
2026-05-26T02:14:44.2304317Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-05-26T02:14:44.2304884Z           36: 		resource "mongodbatlas_project" "second" {
2026-05-26T02:14:44.2305256Z         
2026-05-26T02:14:44.2305714Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:14:44.2306437Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:14:44.2307007Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:44.2307467Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (82.21s)
```

- 2026-05-27 PASS 8 minutes
- 2026-05-28

### Error 2026-05-28T01:03:33+00:00
```
2026-05-28T01:03:33.2255782Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-28T01:03:33.2260288Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-28T01:03:33.2261990Z   diagnostic_summary=
2026-05-28T01:03:33.2264474Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11
2026-05-28T01:03:33.2272387Z   
2026-05-28T01:03:33.2308869Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-28T01:03:33.2309554Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-28T01:03:33.2309983Z         
2026-05-28T01:03:33.2310355Z         Error: error creating project: test-acc-tf-p-1678903350625101888
2026-05-28T01:03:33.2310684Z         
2026-05-28T01:03:33.2311064Z           with mongodbatlas_project.first,
2026-05-28T01:03:33.2311599Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-05-28T01:03:33.2312091Z           13: 		resource "mongodbatlas_project" "first" {
2026-05-28T01:03:33.2312373Z         
2026-05-28T01:03:33.2312937Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:03:33.2313505Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:03:33.2314087Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:03:33.2314615Z         
2026-05-28T01:03:33.2315235Z         Error: error creating project: test-acc-tf-p-8174453507091284572
2026-05-28T01:03:33.2315695Z         
2026-05-28T01:03:33.2316225Z           with mongodbatlas_project.second,
2026-05-28T01:03:33.2316892Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-05-28T01:03:33.2317777Z           36: 		resource "mongodbatlas_project" "second" {
2026-05-28T01:03:33.2318186Z         
2026-05-28T01:03:33.2318821Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:03:33.2329663Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:03:33.2330442Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:03:33.2331059Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (67.57s)
```

- 2026-05-29 PASS 3 minutes
- 2026-05-30 PASS 3 minutes
- 2026-05-31: MISSING
- 2026-06-01

### Error 2026-06-01T01:21:38+00:00
```
2026-06-01T01:21:38.2940181Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-06-01T01:21:38.2945302Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-06-01T01:21:38.3008187Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-06-01T01:21:38.3008957Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-06-01T01:21:38.3009512Z         
2026-06-01T01:21:38.3011477Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1cdba6adbc612d01a2805b/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6a1cdba6adbc612d01a2805b. Reason: Conflict. Params: [AZURE 6a1cdba6adbc612d01a2805b], BadRequestDetail: 
2026-06-01T01:21:38.3013122Z         
2026-06-01T01:21:38.3013529Z           with mongodbatlas_network_container.first,
2026-06-01T01:21:38.3014408Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-06-01T01:21:38.3015120Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-06-01T01:21:38.3015505Z         
2026-06-01T01:21:38.3017693Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1cdba6adbc612d01a28050/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6a1cdba6adbc612d01a28050. Reason: Conflict. Params: [AZURE 6a1cdba6adbc612d01a28050], BadRequestDetail: 
2026-06-01T01:21:38.3019074Z         
2026-06-01T01:21:38.3019475Z           with mongodbatlas_network_container.second,
2026-06-01T01:21:38.3020229Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-06-01T01:21:38.3020942Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-06-01T01:21:38.3021316Z         
2026-06-01T01:21:38.3021684Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (8.37s)
```

- 2026-06-02

### Error 2026-06-02T01:13:23+00:00
```
2026-06-02T01:13:23.3354734Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-06-02T01:13:23.3360143Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-06-02T01:13:23.3456628Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-06-02T01:13:23.3457446Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-06-02T01:13:23.3458140Z         
2026-06-02T01:13:23.3458641Z         Error: error creating project: test-acc-tf-p-3981117713926579741
2026-06-02T01:13:23.3459066Z         
2026-06-02T01:13:23.3459430Z           with mongodbatlas_project.first,
2026-06-02T01:13:23.3460113Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-06-02T01:13:23.3460767Z           13: 		resource "mongodbatlas_project" "first" {
2026-06-02T01:13:23.3461132Z         
2026-06-02T01:13:23.3461672Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:13:23.3462388Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:13:23.3463049Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3463455Z         
2026-06-02T01:13:23.3464148Z         Error: error creating project: test-acc-tf-p-6462039448552862014
2026-06-02T01:13:23.3464663Z         
2026-06-02T01:13:23.3465054Z           with mongodbatlas_project.second,
2026-06-02T01:13:23.3465766Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-06-02T01:13:23.3466434Z           36: 		resource "mongodbatlas_project" "second" {
2026-06-02T01:13:23.3466817Z         
2026-06-02T01:13:23.3467370Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:13:23.3468094Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:13:23.3468757Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3469301Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (94.98s)
```

- 2026-06-03 PASS 7 minutes
- 2026-06-04 PASS 3 minutes
- 2026-06-05

### Error 2026-06-05T01:16:17+00:00
```
2026-06-05T01:16:17.7117918Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-06-05T01:16:17.7141261Z    test_working_directory=/tmp/plugintest2310200041 test_step_number=1 test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus test_terraform_path=/home/runner/work/_temp/0c71058a-250f-4458-9a6f-d774b4e27d82/terraform
2026-06-05T01:16:17.7142609Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-06-05T01:16:17.7143168Z         
2026-06-05T01:16:17.7145260Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220e7770de8903f192317/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6a2220e7770de8903f192317. Reason: Conflict. Params: [AZURE 6a2220e7770de8903f192317], BadRequestDetail: 
2026-06-05T01:16:17.7146667Z         
2026-06-05T01:16:17.7147070Z           with mongodbatlas_network_container.first,
2026-06-05T01:16:17.7147838Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-06-05T01:16:17.7148549Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-06-05T01:16:17.7148936Z         
2026-06-05T01:16:17.7151267Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220e7770de8903f19270f/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6a2220e7770de8903f19270f. Reason: Conflict. Params: [AZURE 6a2220e7770de8903f19270f], BadRequestDetail: 
2026-06-05T01:16:17.7152639Z         
2026-06-05T01:16:17.7153041Z           with mongodbatlas_network_container.second,
2026-06-05T01:16:17.7153800Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-06-05T01:16:17.7154529Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-06-05T01:16:17.7154917Z         
2026-06-05T01:16:17.7155428Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (7.44s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 4 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 4 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
