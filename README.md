# DevCoffeeOps

### features
```sh
npm run serve:extract   # run and watch extract app
npm run serve:load      # run and watch load app
npm run dev:http        # run and watch http app development server

npm run db:migrate:load # delete and replace database migrations for load app
npm run db:studio:load  # open prisma studio for load app
```

### How to extend

```sh
# add a nextjs app
npx nx g @nrwl/next:app your_nextjs_app_name --directory=apps/your_nextjs_app_name

# add a custom lib
npx nx g lib your_lib_name --directory=libs/your_lib_name
```
